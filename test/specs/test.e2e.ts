import { test, expect, Page } from '@playwright/test'
import { SignUpPage } from '../pageobjects/signup.page.js'
import { LoginPage } from '../pageobjects/login.page.js'

test.describe('QA Lab authentication', () => {
  let signUpPage: SignUpPage
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    signUpPage = new SignUpPage(page)
    loginPage = new LoginPage(page)
  })

  test('should render the sign up form with required fields', async () => {
    await signUpPage.open()

    await expect(signUpPage.page).toHaveURL('https://qa-lab.dev.dnc.pp.ua/signup')
    await expect(signUpPage.form).toBeVisible()
    await expect(signUpPage.emailInput).toBeVisible()
    await expect(signUpPage.passwordInput).toBeVisible()
    await expect(signUpPage.submitBtn).toContainText('Sign up')
    await expect(signUpPage.loginLink).toContainText('Login')
  })

  test('should navigate from sign up to login page', async () => {
    await signUpPage.open()
    await signUpPage.loginLink.click()

    await expect(signUpPage.page).toHaveURL('https://qa-lab.dev.dnc.pp.ua/login')
  })

  test('should render the login form with required fields', async () => {
    await loginPage.open()

    await expect(loginPage.page).toHaveURL('https://qa-lab.dev.dnc.pp.ua/login')
    await expect(loginPage.form).toBeVisible()
    await expect(loginPage.emailInput).toBeVisible()
    await expect(loginPage.passwordInput).toBeVisible()
    await expect(loginPage.submitButton).toContainText('Login')
    await expect(loginPage.signUpLink).toContainText('Sign up')
  })

  test('should navigate from login to sign up page', async () => {
    await loginPage.open()
    await loginPage.signUpLink.click()

    await expect(loginPage.page).toHaveURL('https://qa-lab.dev.dnc.pp.ua/signup')
  })

  test('should accept values in the sign up form', async () => {
    const email = `playwright_${Date.now()}@example.com`
    const password = 'Password123!'

    await signUpPage.open()
    await signUpPage.signUp(email, password)

    await expect(signUpPage.emailInput).toHaveValue(email)
    await expect(signUpPage.passwordInput).toHaveValue(password)
  })

  test('should not sign up with invalid email format', async () => {
    const email = 'invalid-email'
    const password = 'Password123!'

    await signUpPage.open()
    await signUpPage.signUp(email, password)

    await expect(signUpPage.page).toHaveURL('https://qa-lab.dev.dnc.pp.ua/signup')
    await expect(signUpPage.emailInput).toHaveValue(email)
    await expect(signUpPage.passwordInput).toHaveValue(password)
  })

  test('should not sign up with a short password', async () => {
    const email = `playwright_short_${Date.now()}@example.com`
    const password = '123'

    await signUpPage.open()
    await signUpPage.signUp(email, password)

    await expect(signUpPage.page).toHaveURL('https://qa-lab.dev.dnc.pp.ua/signup')
    await expect(signUpPage.emailInput).toHaveValue(email)
    await expect(signUpPage.passwordInput).toHaveValue(password)
  })

  test('should accept values in the login form', async () => {
    const email = 'playwright@example.com'
    const password = 'Password123!'

    await loginPage.open()
    await loginPage.login(email, password)

    await expect(loginPage.emailInput).toHaveValue(email)
    await expect(loginPage.passwordInput).toHaveValue(password)
  })

  test('should not login with wrong credentials', async () => {
    const email = 'wrong.user@example.com'
    const password = 'WrongPassword123!'

    await loginPage.open()
    await loginPage.login(email, password)

    await expect(loginPage.page).toHaveURL('https://qa-lab.dev.dnc.pp.ua/login')
    await expect(loginPage.emailInput).toHaveValue(email)
    await expect(loginPage.passwordInput).toHaveValue(password)
  })

  test('should not login with empty password', async () => {
    const email = 'playwright@example.com'
    const password = ''

    await loginPage.open()
    await loginPage.login(email, password)

    await expect(loginPage.page).toHaveURL('https://qa-lab.dev.dnc.pp.ua/login')
    await expect(loginPage.emailInput).toHaveValue(email)
    await expect(loginPage.passwordInput).toHaveValue(password)
  })
})

