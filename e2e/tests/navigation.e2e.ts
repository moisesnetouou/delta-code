import { expect, type Page, test } from "@playwright/test";

const SECTION_LABELS = ["Sobre", "Jornada", "Habilidades", "Contato"];

async function openMobileMenuIfPresent(page: Page) {
  const openMenu = page.getByRole("button", { name: "Abrir menu" });
  if (await openMenu.isVisible().catch(() => false)) {
    await openMenu.click();
  }
}

test.describe("Navegação — navbar e âncoras", () => {
  test("navbar contém links para todas as seções", async ({ page }) => {
    await page.goto("/");
    await openMobileMenuIfPresent(page);

    for (const label of SECTION_LABELS) {
      await expect(
        page
          .getByRole("button", { name: label, exact: true })
          .filter({ visible: true }),
      ).toBeVisible();
    }
  });

  test("clicar em link da navbar rola até a seção alvo", async ({ page }) => {
    await page.goto("/");

    await openMobileMenuIfPresent(page);
    await page
      .getByRole("button", { name: "Habilidades", exact: true })
      .filter({ visible: true })
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

    // no mobile o clique fecha o drawer; reabrir antes do próximo item
    await openMobileMenuIfPresent(page);
    await page
      .getByRole("button", { name: "Contato", exact: true })
      .filter({ visible: true })
      .click();
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
