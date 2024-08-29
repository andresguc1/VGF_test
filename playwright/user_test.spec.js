const { test, expect } = require('@playwright/test');

const baseUrl = 'http://localhost:3000/';

test.describe('User Registration and Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    await page.locator('text=Proyecto Web Básico').waitFor();
  });

  test('Register a new user', async ({ page }) => {
    await page.locator('text=Regístrate').click();
    await page.fill('[type="email"]', 'user@example.com');
    await page.fill('[type="password"]', 'password123');
    await page.locator('text=Registrarse').click();
    await expect(page.locator('#user-panel > h2')).toHaveText('Panel de Usuario');

  });

  test('Login with the registered user', async ({ page }) => {
    await page.fill('[type="email"]', 'user@example.com');
    await page.fill('[type="password"]', 'password123');
    await page.locator('button[type="submit"]').click();    
    await expect(page.locator('p')).toHaveText('Email: user@example.com');
  });
});