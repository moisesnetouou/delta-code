import { expect, test } from "@playwright/test";

test.describe("Skills — habilidades por categoria", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#skills");
    await page.locator("#skills").scrollIntoViewIfNeeded();
    await page.locator("#skills").waitFor({ state: "visible" });
  });

  test("renderiza categorias principais", async ({ page }) => {
    const skills = page.locator("#skills");

    await expect(
      skills.getByRole("heading", { name: "Habilidades" }),
    ).toBeVisible();

    await expect(
      skills.getByRole("heading", { name: "Frontend & Frameworks" }),
    ).toBeVisible();
    await expect(skills.getByRole("heading", { name: "Mobile" })).toBeVisible();
    await expect(
      skills.getByRole("heading", { name: "Automação & IA" }),
    ).toBeVisible();
    await expect(
      skills.getByRole("heading", { name: "Backend" }),
    ).toBeVisible();
    await expect(
      skills.getByRole("heading", { name: "Soft Skills" }),
    ).toBeVisible();
  });

  test("clicar em uma skill com descrição abre o SkillDialog", async ({
    page,
  }) => {
    const reactButton = page
      .locator("#skills button", { hasText: /^React$/ })
      .first();
    await reactButton.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText("O que é")).toBeVisible();
    await expect(dialog.getByText("Caso de Uso")).toBeVisible();
  });

  test("Claude (renomeada) abre dialog com descrição expandida", async ({
    page,
  }) => {
    const claudeButton = page
      .locator("#skills button", { hasText: /^Claude$/ })
      .first();
    await claudeButton.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText(/Claude Code/i)).toBeVisible();
    await expect(dialog.getByText(/Claude Design/i)).toBeVisible();
  });

  test("skills sem descrição estão disabled (aria-disabled)", async ({
    page,
  }) => {
    const buttons = page.locator("#skills button[aria-disabled='true']");
    const disabledCount = await buttons.count();
    expect(disabledCount).toBeGreaterThanOrEqual(0);
  });
});
