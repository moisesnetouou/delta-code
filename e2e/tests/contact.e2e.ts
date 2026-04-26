import { expect, test } from "@playwright/test";

test.describe("Contact — contato e ações", () => {
  test("seção contato exibe título e botão principal de e-mail", async ({
    page,
  }) => {
    await page.goto("/#contact");
    await page.locator("#contact").scrollIntoViewIfNeeded();

    await expect(
      page.getByRole("heading", { name: "Contato" }),
    ).toBeVisible();

    const mailto = page.locator("#contact a[href^='mailto:']");
    await expect(mailto).toBeVisible();
  });

  test("links Currículo, LinkedIn e GitHub estão visíveis", async ({
    page,
  }) => {
    await page.goto("/#contact");
    await page.locator("#contact").scrollIntoViewIfNeeded();

    await expect(page.getByText("Baixar Currículo")).toBeVisible();
    await expect(
      page.locator("#contact").getByText("LinkedIn"),
    ).toBeVisible();
    await expect(page.locator("#contact").getByText("GitHub")).toBeVisible();
  });
});
