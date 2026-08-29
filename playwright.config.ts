import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;
const port = Number(process.env.E2E_PORT ?? 3000);
const baseURL = process.env.E2E_BASE_URL ?? `http://localhost:${port}`;

export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.e2e.ts",

  timeout: 60_000,
  expect: { timeout: 10_000 },

  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  workers: isCI ? 1 : undefined,

  reporter: isCI ? "list" : "html",

  use: {
    baseURL,
    actionTimeout: 10_000,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    reducedMotion: "reduce",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      use: { ...devices["iPhone 14"] },
    },
  ],

  webServer: {
    command: `npm run start -- --port ${port}`,
    port,
    reuseExistingServer: !isCI,
    timeout: 120_000,
  },
});
