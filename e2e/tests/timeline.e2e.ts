import { expect, test } from "@playwright/test";

test.describe("Timeline — Minha Jornada", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#timeline");
    await page.locator("#timeline").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
  });

  test("renderiza título, subtítulo de anos e cards de experiências", async ({
    page,
  }) => {
    const timeline = page.locator("#timeline");

    await expect(
      timeline.getByRole("heading", { name: "Minha Jornada" }),
    ).toBeVisible();
    await expect(timeline.getByText(/anos de experiência/i)).toBeVisible();

    await expect(
      timeline.getByRole("heading", { name: "Frontend Engineer" }).first(),
    ).toBeVisible();
    await expect(
      timeline.getByRole("heading", { name: "Tech Lead Temporário" }).first(),
    ).toBeVisible();
    await expect(
      timeline
        .getByRole("heading", { name: "Desenvolvedor Frontend Pleno" })
        .first(),
    ).toBeVisible();
    await expect(
      timeline
        .getByRole("heading", { name: "Desenvolvedor Frontend Jr" })
        .first(),
    ).toBeVisible();
  });

  test("clicar em um card abre o modal de experiência com responsabilidades + impacto", async ({
    page,
  }) => {
    await page
      .locator("#timeline")
      .getByRole("heading", { name: "Desenvolvedor Frontend Jr" })
      .first()
      .click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText("Responsabilidades")).toBeVisible();
    await expect(dialog.getByText("Impacto")).toBeVisible();
    await expect(dialog.getByText("Tecnologias")).toBeVisible();
  });

  test("modal de tecnologias abre via botão +N", async ({ page }) => {
    const plusButton = page
      .locator("#timeline button", { hasText: /^\+\d+$/ })
      .first();
    await plusButton.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("heading", { name: "Tecnologias" })).toBeVisible();
  });

  test("clicar em uma skill no modal de tecnologias abre o SkillDialog", async ({
    page,
  }) => {
    await page
      .locator("#timeline button", { hasText: /^\+\d+$/ })
      .first()
      .click();

    const techDialog = page.getByRole("dialog");
    await expect(techDialog).toBeVisible();

    const reactSkill = techDialog
      .getByRole("button", { name: "React", exact: true })
      .first();
    if ((await reactSkill.count()) > 0) {
      await reactSkill.click();
      await expect(page.getByText("O que é").last()).toBeVisible();
      await expect(page.getByText("Caso de Uso").last()).toBeVisible();
    }
  });

  test("tech badge dentro do modal de experiência abre SkillDialog", async ({
    page,
  }) => {
    await page
      .locator("#timeline")
      .getByRole("heading", { name: "Frontend Engineer" })
      .first()
      .click();

    const expDialog = page.getByRole("dialog");
    await expect(expDialog).toBeVisible();

    const reactBadge = expDialog
      .getByRole("button", { name: "React", exact: true })
      .first();
    if ((await reactBadge.count()) > 0) {
      await reactBadge.click();
      await expect(page.getByText("O que é").last()).toBeVisible();
    }
  });
});
