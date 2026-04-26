import { expect, test } from "@playwright/test";

test.describe("Navegação — navbar e âncoras", () => {
  test("navbar contém links para todas as seções", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation").first();
    await expect(nav.getByText("Sobre", { exact: true })).toBeVisible();
    await expect(nav.getByText("Jornada", { exact: true })).toBeVisible();
    await expect(nav.getByText("Habilidades", { exact: true })).toBeVisible();
    await expect(nav.getByText("Contato", { exact: true })).toBeVisible();
  });

  test("clicar em link da navbar rola até a seção alvo", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation").first();

    await nav
      .getByRole("button", { name: "Habilidades", exact: true })
      .click();
    await page.waitForFunction(
      () => {
        const el = document.getElementById("skills");
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      },
      { timeout: 8000 },
    );

    await nav.getByRole("button", { name: "Contato", exact: true }).click();
    await page.waitForFunction(
      () => {
        const el = document.getElementById("contact");
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      },
      { timeout: 8000 },
    );
  });

  test("botão back-to-top aparece após scroll e leva ao topo", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    await page.addStyleTag({
      content: "nextjs-portal{display:none!important}",
    });

    const backBtn = page.locator('button[aria-label="Voltar ao topo"]');
    await expect(backBtn).toBeVisible();
    await backBtn.click();

    await page.waitForFunction(() => window.scrollY < 200, { timeout: 8000 });
  });
});
