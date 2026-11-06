import { test, expect } from "@playwright/test";

test("在当前页面切换中英文界面", async ({ page }) => {
  await page.goto("/about/");
  await expect(page.getByRole("heading", { name: "关于" })).toBeVisible();
  await page.getByRole("link", { name: "English", exact: true }).click();
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
  await page.getByRole("link", { name: "简体中文", exact: true }).click();
  await expect(page.getByRole("heading", { name: "关于" })).toBeVisible();
});
