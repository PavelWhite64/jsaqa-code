const { test, expect } = require("@playwright/test");
const { email, password } = require("../user");

test("HappyPath", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator("h2")).toHaveText(["Моё обучение"]);
  await page.screenshot({ path: "happyPath.png", fullPage: true });
}, 60000);

test("FailedTest", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', "Email@email.com");
  await page.fill('[placeholder="Пароль"]', "Password");
  await page.click('[data-testid="login-submit-btn"]');
  const error = await page.locator('[data-testid="login-error-hint"]');
  await expect(error).toHaveText("Вы ввели неправильно логин или пароль");
  await page.screenshot({ path: "failedTest.png", fullPage: true });
}, 60000);
