import { expect, test } from "@playwright/test";

const REQUIRED_REGULAR = [
  "welcome",
  "view_journey",
  "view_contact",
  "open_experience",
  "open_skill",
  "curious",
  "click_linkedin",
  "click_github",
  "download_cv",
];

test.describe("Achievements — completar 100% e revelar conquista secreta", () => {
  test.beforeEach(async ({ context }) => {
    await context.clearCookies();
    // dispensa o banner de consentimento para ele não cobrir elementos no mobile
    await context.addCookies([
      {
        name: "delta-consent",
        value: "rejected",
        url: "http://localhost:3000",
      },
    ]);
  });

  test("desbloqueia welcome ao carregar a página", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Bem-vindo")).toBeVisible({ timeout: 6000 });
  });

  test("desbloqueia todas as conquistas e revela platinum + 100% no painel", async ({
    page,
    context,
  }) => {
    await page.addInitScript(() => {
      window.open = () => null;
    });

    await page.goto("/");
    await page.addStyleTag({
      content: "nextjs-portal{display:none!important}",
    });

    // welcome (auto on mount)
    await expect(page.getByText("Bem-vindo")).toBeVisible({ timeout: 6000 });

    // view_journey (scroll timeline + dispara evento scroll)
    await page.evaluate(() => {
      const el = document.getElementById("timeline");
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "end" });
        window.dispatchEvent(new Event("scroll"));
      }
    });

    // open_experience
    await page
      .locator("#timeline")
      .getByRole("heading", { name: "Frontend Engineer" })
      .first()
      .click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);

    // open_skill + curious (abrir 3 skills distintas na grade de habilidades)
    await page.locator("#skills").scrollIntoViewIfNeeded();
    for (const skill of ["React", "Next.js", "TypeScript"]) {
      const pattern = new RegExp(`^${skill.replace(".", "\\.")}$`);
      await page
        .locator("#skills button", { hasText: pattern })
        .first()
        .click();
      await expect(page.getByRole("dialog").getByText("O que é")).toBeVisible();
      await page.keyboard.press("Escape");
      await page.waitForTimeout(300);
    }

    // click_linkedin
    await page
      .locator("#hero")
      .getByRole("button", { name: "LinkedIn", exact: true })
      .click();

    // click_github
    await page
      .locator("#hero")
      .getByRole("button", { name: "GitHub", exact: true })
      .click();

    // download_cv
    const downloadPromise = page.waitForEvent("download");
    await page
      .locator("#hero")
      .getByRole("button", { name: "Baixar Currículo", exact: true })
      .click();
    await downloadPromise;

    // view_contact (scroll + scroll event)
    await page.evaluate(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "end" });
        window.dispatchEvent(new Event("scroll"));
      }
    });

    // as 9 conquistas regulares desbloqueadas no cookie
    await expect
      .poll(
        async () => {
          const c = await context.cookies();
          const v = c.find((x) => x.name === "delta-achievements")?.value;
          if (!v) return false;
          try {
            const parsed = JSON.parse(decodeURIComponent(v));
            return REQUIRED_REGULAR.every((id) =>
              (parsed.unlocked ?? []).includes(id),
            );
          } catch {
            return false;
          }
        },
        { timeout: 15_000, intervals: [500] },
      )
      .toBe(true);

    // com as 9 regulares no cookie, o manager desbloqueia platinum via polling
    await expect
      .poll(
        async () => {
          const c = await context.cookies();
          const v = c.find((x) => x.name === "delta-achievements")?.value;
          return v ? decodeURIComponent(v) : "";
        },
        { timeout: 20_000, intervals: [500] },
      )
      .toContain("platinum");

    // abre painel de conquistas via Trophy button (canto inferior direito)
    const trophyButton = page.locator("button.fixed.bottom-6.right-6").first();
    await trophyButton.click();

    await expect(
      page.getByRole("heading", { name: "Conquistas" }),
    ).toBeVisible();
    // progresso 100% confirma que todos os requisitos + platinum caíram no cookie
    await expect(page.getByText("100%")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Resetar Conquistas" }),
    ).toBeVisible();
  });
});
