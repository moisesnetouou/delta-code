import { expect, test } from "@playwright/test";

const POLLING_INTERVAL_MS = 1500;

test.describe("Achievements — completar 100% e revelar conquista secreta", () => {
  test.beforeEach(async ({ context }) => {
    await context.clearCookies();
  });

  test("desbloqueia welcome ao carregar a página", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Bem-vindo")).toBeVisible({ timeout: 6000 });
  });

  test("desbloqueia todas as 8 conquistas e revela platinum + 100% no painel", async ({
    page,
    context,
  }) => {
    // bloqueia window.open para popups não pausarem setInterval da aba principal
    await page.addInitScript(() => {
      window.open = () => null;
    });

    await page.goto("/");
    await page.addStyleTag({
      content: "nextjs-portal{display:none!important}",
    });

    // 1. welcome (auto on mount)
    await expect(page.getByText("Bem-vindo")).toBeVisible({ timeout: 6000 });

    // 2. view_journey (scroll timeline + dispara evento scroll)
    await page.evaluate(() => {
      const el = document.getElementById("timeline");
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "end" });
        window.dispatchEvent(new Event("scroll"));
      }
    });

    // 3. open_experience
    await page
      .locator("#timeline")
      .getByRole("heading", { name: "Frontend Engineer" })
      .first()
      .click();
    const expDialog = page.getByRole("dialog");
    await expect(expDialog).toBeVisible();

    // 4. open_skill
    await expDialog
      .getByRole("button", { name: "React", exact: true })
      .first()
      .click();
    await expect(page.getByRole("dialog").last().getByText("O que é")).toBeVisible();

    // close dialogs
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);

    // 5. click_linkedin (popup pode abrir após 1.5s; achievement já fica em cookie)
    await page
      .locator("#hero")
      .getByRole("button", { name: "LinkedIn", exact: true })
      .click();

    // 6. click_github
    await page
      .locator("#hero")
      .getByRole("button", { name: "GitHub", exact: true })
      .click();

    // 7. download_cv
    const downloadPromise = page.waitForEvent("download");
    await page
      .locator("#hero")
      .getByRole("button", { name: "Baixar Currículo", exact: true })
      .click();
    await downloadPromise;

    // 8. view_contact (scroll + scroll event)
    await page.evaluate(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "end" });
        window.dispatchEvent(new Event("scroll"));
      }
    });

    // garantir que cookie tenha as 8 conquistas regulares antes de esperar platinum
    await expect
      .poll(
        async () => {
          const c = await context.cookies();
          const v = c.find((x) => x.name === "delta-achievements")?.value;
          if (!v) return 0;
          const decoded = decodeURIComponent(v);
          return (decoded.match(/welcome|view_journey|view_contact|open_experience|open_skill|click_linkedin|click_github|download_cv/g) ?? []).length;
        },
        { timeout: 15_000, intervals: [500] },
      )
      .toBeGreaterThanOrEqual(8);

    // após cookie ter as 8 regulares, recarregar a página: o manager no mount
    // detecta as 8 e dispara checkAndUnlockPlatinum em 1s (caminho deterministico).
    await page.reload();

    await expect
      .poll(
        async () => {
          const c = await context.cookies();
          const v = c.find((x) => x.name === "delta-achievements")?.value;
          return v ? decodeURIComponent(v) : "";
        },
        { timeout: 10_000, intervals: [500] },
      )
      .toContain("platinum");

    // toast da secret aparece (pode estar empilhada com outras)
    await expect(
      page.getByText(/Conquista Secreta Revelada/i).first(),
    ).toBeVisible({ timeout: 5_000 });

    // abre painel de conquistas via Trophy button (canto inferior direito)
    const trophyButton = page.locator("button.fixed.bottom-6.right-6").first();
    await trophyButton.click();

    const panel = page.getByRole("heading", { name: "Conquistas" });
    await expect(panel).toBeVisible();
    await expect(page.getByText("100%")).toBeVisible();

    // todas as 8 regulares marcadas + secret revealed
    await expect(page.getByText("Bem-vindo")).toBeVisible();
    await expect(page.getByText("Fechamento").first()).toBeVisible();
    await expect(page.getByText("Detalhista")).toBeVisible();
    await expect(page.getByText("Aprendizado")).toBeVisible();
    await expect(page.getByText("Networking")).toBeVisible();
    await expect(page.getByText("Código Aberto")).toBeVisible();
    await expect(page.getByText("Currículo Obtido")).toBeVisible();

    // secret platinum revelada (não mais "Conquista Secreta" com cadeado)
    await expect(
      page.getByText("Você explorou todo o portfólio!").last(),
    ).toBeVisible();
  });
});
