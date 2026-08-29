import { expect, test } from "@playwright/test";

test.describe("Projetos — seção, dialog e case study", () => {
  test.describe("Seção na home", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/#projects");
      await page.locator("#projects").scrollIntoViewIfNeeded();
      await page.locator("#projects").waitFor({ state: "visible" });
    });

    test("renderiza cabeçalho e os dois grupos", async ({ page }) => {
      const projects = page.locator("#projects");

      await expect(
        projects.getByRole("heading", { name: "Projetos", exact: true }),
      ).toBeVisible();
      await expect(
        projects.getByText("Na carreira", { exact: true }),
      ).toBeVisible();
      await expect(
        projects.getByText("Projeto pessoal", { exact: true }),
      ).toBeVisible();
    });

    test("renderiza os seis projetos da carreira e o pessoal", async ({
      page,
    }) => {
      const projects = page.locator("#projects");

      for (const name of [
        "Plataforma de observabilidade",
        "Canal de denúncias anônimo",
        "CRM com conteúdo editável",
        "Plataforma de leads e indicação",
        "Atendimento automatizado e telemetria",
        "Automações em Python com IA",
        "deltalog",
      ]) {
        await expect(
          projects.getByRole("heading", { name, exact: true }),
        ).toBeVisible();
      }
    });

    test("não expõe nome de empresa nos cards", async ({ page }) => {
      const projects = page.locator("#projects");

      await expect(projects.getByText(/Click IP/i)).toHaveCount(0);
      await expect(projects.getByText(/i_mais/i)).toHaveCount(0);
    });

    test("só o projeto pessoal leva para uma rota de case study", async ({
      page,
    }) => {
      const projects = page.locator("#projects");
      const caseLinks = projects.getByRole("link", { name: /Ver case study/ });

      await expect(caseLinks).toHaveCount(1);
      await expect(caseLinks.first()).toHaveAttribute(
        "href",
        "/projects/deltalog",
      );
    });

    test("link externo abre em nova aba com rel seguro", async ({ page }) => {
      const liveLink = page
        .locator("#projects")
        .getByRole("link", { name: /deltalog\.dev\.br/ });

      await expect(liveLink).toHaveAttribute(
        "href",
        "https://www.deltalog.dev.br",
      );
      await expect(liveLink).toHaveAttribute("target", "_blank");
      await expect(liveLink).toHaveAttribute("rel", /noopener/);
      await expect(liveLink).toHaveAttribute("rel", /noreferrer/);
    });

    test("aparece na navbar", async ({ page }) => {
      const nav = page.locator("nav");
      const desktopItem = nav.getByRole("button", {
        name: "Projetos",
        exact: true,
      });

      if ((await desktopItem.count()) > 0) {
        await expect(desktopItem.first()).toBeVisible();
        return;
      }

      await nav.getByRole("button", { name: "Abrir menu" }).click();
      await expect(
        page.getByRole("button", { name: "Projetos", exact: true }),
      ).toBeVisible();
    });
  });

  test.describe("Dialog dos projetos da carreira", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/#projects");
      await page.locator("#projects").scrollIntoViewIfNeeded();
      await page.locator("#projects").waitFor({ state: "visible" });
    });

    test("card sem case study abre dialog com visão geral e destaques", async ({
      page,
    }) => {
      await page
        .locator("#projects")
        .getByRole("button", {
          name: /Ver detalhes: Plataforma de observabilidade/,
        })
        .click();

      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible();
      await expect(
        dialog.getByRole("heading", { name: "Plataforma de observabilidade" }),
      ).toBeVisible();
      await expect(dialog.getByText("O que eu fiz")).toBeVisible();
      await expect(dialog.getByText("Stack")).toBeVisible();
    });

    test("dialog fecha no Escape", async ({ page }) => {
      await page
        .locator("#projects")
        .getByRole("button", { name: /Ver detalhes: CRM com conteúdo editável/ })
        .click();

      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible();

      await page.keyboard.press("Escape");
      await expect(dialog).toBeHidden();
    });

    test("chip de tecnologia no dialog abre o SkillDialog", async ({ page }) => {
      await page
        .locator("#projects")
        .getByRole("button", {
          name: /Ver detalhes: Automações em Python com IA/,
        })
        .click();

      const dialog = page.getByRole("dialog").first();
      await expect(dialog).toBeVisible();

      await dialog.getByRole("button", { name: "Python", exact: true }).click();

      await expect(page.getByText("O que é").last()).toBeVisible();
      await expect(page.getByText("Caso de Uso").last()).toBeVisible();
    });
  });

  test.describe("Página do case study", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/projects/deltalog");
      await page
        .getByRole("heading", { level: 1, name: "deltalog" })
        .waitFor({ state: "visible" });
    });

    test("renderiza os blocos do case", async ({ page }) => {
      await expect(
        page.getByRole("heading", { level: 1, name: "deltalog" }),
      ).toBeVisible();

      for (const heading of ["O problema", "Stack", "Arquitetura"]) {
        await expect(
          page.getByRole("heading", { level: 2, name: heading, exact: true }),
        ).toBeVisible();
      }
    });

    test("não expõe link de repositório para projeto privado", async ({
      page,
    }) => {
      await expect(page.getByRole("link", { name: "Ver o código" })).toHaveCount(
        0,
      );
      await expect(
        page.getByText(
          "Repositório privado, porque os rascunhos são arquivos versionados",
        ),
      ).toBeVisible();
    });

    test("clicar em um item da stack abre o SkillDialog", async ({ page }) => {
      await page.getByRole("button", { name: "Keystatic", exact: true }).click();

      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible();
      await expect(dialog.getByText("O que é")).toBeVisible();
      await expect(dialog.getByText("Caso de Uso")).toBeVisible();
    });

    test("voltar ao portfólio leva para a âncora da seção", async ({ page }) => {
      const backLink = page
        .getByRole("link", { name: "Voltar ao portfólio" })
        .first();

      await expect(backLink).toHaveAttribute("href", "/#projects");

      await backLink.click();
      await expect(page).toHaveURL(/\/#projects$/);
      await expect(page.locator("#projects")).toBeVisible();
    });

    test("navbar navega de volta para a home a partir da rota de detalhe", async ({
      page,
    }) => {
      const navAbout = page
        .locator("nav")
        .getByRole("button", { name: "Sobre", exact: true })
        .first();

      const isVisible = await navAbout.isVisible().catch(() => false);
      test.skip(!isVisible, "navbar desktop não está visível neste viewport");

      await navAbout.click();
      await expect(page).toHaveURL(/\/#about$/);
      await expect(page.locator("#about")).toBeVisible();
    });

    test("projeto sem case study não tem rota própria", async ({ page }) => {
      const response = await page.goto("/projects/observabilidade");
      expect(response?.status()).toBe(404);
    });

    test("slug inexistente responde 404", async ({ page }) => {
      const response = await page.goto("/projects/nao-existe");
      expect(response?.status()).toBe(404);
    });
  });
});
