import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login.js';

test('test', async ({ page }) => {

  const login = new LoginPage(page);

  await login.navigateToLoginPage();
  await login.login('tomsmith', 'SuperSecretPassword!');

  /*
  await page.goto('http://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  */
});