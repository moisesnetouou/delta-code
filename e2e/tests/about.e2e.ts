import { expect, test } from "@playwright/test";

test.describe("About — bio e dados pessoais", () => {
  test("título da seção é renderizado", async ({ page }) => {
    await page.goto("/#about");
    await expect(
      page.getByRole("heading", { name: "Sobre" }),
    ).toBeVisible();
  });

  test("summary aparece quebrado em múltiplos parágrafos", async ({
    page,
  }) => {
    await page.goto("/#about");
    await page.waitForTimeout(500);

    const aboutSection = page.locator("#about");
    await aboutSection.scrollIntoViewIfNeeded();

    await expect(
      aboutSection.getByText(/Engenheiro de Software com \+5 anos em React/i),
    ).toBeVisible();
    await expect(
      aboutSection.getByText(/Já parti de uma necessidade de negócio/i),
    ).toBeVisible();
    await expect(
      aboutSection.getByText(/Como tech lead interino/i),
    ).toBeVisible();
    await expect(
      aboutSection.getByText(/procuro aplicar essa bagagem/i),
    ).toBeVisible();
  });

  test("blocos de Formação, Idiomas, Certificações e Destaques estão visíveis", async ({
    page,
  }) => {
    await page.goto("/#about");
    await page.locator("#about").scrollIntoViewIfNeeded();

    await expect(page.getByText("Formação")).toBeVisible();
    await expect(page.getByText("Idiomas")).toBeVisible();
    await expect(page.getByText("Certificações")).toBeVisible();
    await expect(page.getByText("Destaques & Impacto")).toBeVisible();
  });

  test("certificações abrem em nova aba (rel + target corretos)", async ({
    page,
  }) => {
    await page.goto("/#about");
    await page.locator("#about").scrollIntoViewIfNeeded();

    const certLinks = page.locator("#about a[href^='https']");
    const count = await certLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const link = certLinks.nth(i);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noopener noreferrer/);
    }
  });
});
