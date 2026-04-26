import { expect, test } from "@playwright/test";

test.describe("Hero — apresentação inicial", () => {
  test("renderiza nome, título e tagline a partir de portfolio-data", async ({
    page,
  }) => {
    await page.goto("/");
    const hero = page.locator("#hero");

    await expect(
      hero.getByRole("heading", { name: "Moisés Neto" }),
    ).toBeVisible();
    await expect(
      hero.getByText("Frontend Engineer • React • Next.js"),
    ).toBeVisible();
    await expect(
      hero.getByText(/qualidade, consistência e entregas no prazo/i),
    ).toBeVisible();
  });

  test("botões sociais (LinkedIn, GitHub, Currículo) estão acessíveis", async ({
    page,
  }) => {
    await page.goto("/");
    const hero = page.locator("#hero");

    await expect(
      hero.getByRole("button", { name: "LinkedIn", exact: true }),
    ).toBeVisible();
    await expect(
      hero.getByRole("button", { name: "GitHub", exact: true }),
    ).toBeVisible();
    await expect(
      hero.getByRole("button", { name: "Baixar Currículo", exact: true }),
    ).toBeVisible();
  });

  test("indicador de scroll é exibido", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#hero").getByText("Scroll")).toBeVisible();
  });
});
