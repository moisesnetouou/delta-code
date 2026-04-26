import { expect, test } from "@playwright/test";

test.describe("SEO — metadata e tags sociais", () => {
  test("title e meta description corretos", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Moisés Neto.+Frontend Engineer/);

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute(
      "content",
      /Frontend Engineer com \+5 anos/,
    );
  });

  test("Open Graph tags presentes", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      "content",
      "pt_BR",
    );
  });

  test("Twitter card configurado", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.locator('meta[name="twitter:card"]'),
    ).toHaveAttribute("content", "summary_large_image");
  });

  test("canonical URL definido", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  });
});
