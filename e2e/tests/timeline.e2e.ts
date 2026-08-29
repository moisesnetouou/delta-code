import { expect, test } from "@playwright/test";

test.describe("Timeline — Minha Jornada", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#timeline");
    await page.locator("#timeline").scrollIntoViewIfNeeded();
    await page
      .locator("#timeline")
      .getByRole("heading", { name: "Engenheiro de Software" })
      .first()
      .waitFor({ state: "visible" });
  });

  test("renderiza título, subtítulo de anos e a experiência consolidada", async ({
    page,
  }) => {
    const timeline = page.locator("#timeline");

    await expect(
      timeline.getByRole("heading", { name: "Minha Jornada" }),
    ).toBeVisible();
    await expect(timeline.getByText(/anos de experiência/i)).toBeVisible();

    await expect(
      timeline.getByRole("heading", { name: "Engenheiro de Software" }).first(),
    ).toBeVisible();
    await expect(
      timeline.getByText("Jul 2021 - Atual").filter({ visible: true }),
    ).toBeVisible();
  });

  test("card lista a progressão de cargos dentro da mesma empresa", async ({
    page,
  }) => {
    const timeline = page.locator("#timeline");

    await expect(
      timeline.getByText("Progressão").filter({ visible: true }),
    ).toBeVisible();

    for (const role of [
      "Frontend Jr",
      "Frontend Pleno",
      "Tech Lead interino",
    ]) {
      await expect(
        timeline.getByText(role, { exact: true }).filter({ visible: true }),
      ).toBeVisible();
    }
  });

  test("clicar no card abre o modal com responsabilidades + impacto", async ({
    page,
  }) => {
    await page
      .locator("#timeline")
      .getByRole("heading", { name: "Engenheiro de Software" })
      .first()
      .click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    for (const label of ["Responsabilidades", "Impacto", "Tecnologias"]) {
      await expect(
        dialog.getByRole("heading", { name: label, exact: true }),
      ).toBeVisible();
    }
  });

  test("modal de tecnologias abre via botão +N", async ({ page }) => {
    const plusButton = page
      .locator("#timeline button", { hasText: /^\+\d+$/ })
      .first();
    test.skip(
      !(await plusButton.isVisible().catch(() => false)),
      "expander +N de tecnologias não é exibido neste layout (mobile)",
    );
    await plusButton.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("heading", { name: "Tecnologias" }),
    ).toBeVisible();
  });

  test("clicar em uma skill no modal de tecnologias abre o SkillDialog", async ({
    page,
  }) => {
    const plusButton = page
      .locator("#timeline button", { hasText: /^\+\d+$/ })
      .first();
    test.skip(
      !(await plusButton.isVisible().catch(() => false)),
      "expander +N de tecnologias não é exibido neste layout (mobile)",
    );
    await plusButton.click();

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
      .getByRole("heading", { name: "Engenheiro de Software" })
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
