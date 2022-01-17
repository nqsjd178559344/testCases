const { chromium } = require("playwright");
const { test, expect } = require("@playwright/test");

const settings = {
  headless: false,
};
const viewport = { width: 1600, height: 1100 };
let page, browser;

// 私设
const name = "张发发";

test.beforeAll(async () => {
  browser = await chromium.launch(settings);
  context = await browser.newContext({ viewport });
  page = await context.newPage();
  await page.goto("http://localhost:5500/testCases/playwright/");
});

test("has title", async () => {
  const title = page.locator(".wrapper .title");
  await expect(title).toHaveText("我是title");
});

test("has gotoBaidu href", async () => {
  const gotoBaidu = page.locator(".wrapper .gotoBaidu");
  await expect(gotoBaidu).toHaveAttribute("href", "http://www.baidu.com");
});

test("has 查看更多", async () => {
  await expect(page.locator("text=查看更多")).toBeVisible();
});

test("disbaled button", async () => {
  await expect(page.locator("text=disbaled button")).toBeDisabled();
});

test("输入name并验证", async () => {
  await page.fill("input[name=name]", name);
  await expect(page.locator("input[name=name]")).toHaveValue(name);
});
