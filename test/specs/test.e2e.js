import { expect, browser } from '@wdio/globals'
import SignUpPage from '../pageobjects/signup.page.js'
import LoginPage from '../pageobjects/login.page.js'

describe('QA Lab authentication', () => {
    beforeEach(async () => {
        await browser.setWindowSize(1280, 900)
    })

    it('should render the sign up form with required fields', async () => {
        await SignUpPage.open()

        await expect(browser).toHaveUrl('https://qa-lab.dev.dnc.pp.ua/signup')
        await expect(SignUpPage.form).toBeDisplayed()
        await expect(SignUpPage.emailInput).toBeDisplayed()
        await expect(SignUpPage.passwordInput).toBeDisplayed()
        await expect(SignUpPage.submitBtn).toHaveText('Sign up')
        await expect(SignUpPage.loginLink).toHaveText('Login')
    })

    it('should navigate from sign up to login page', async () => {
        await SignUpPage.open()
        await SignUpPage.loginLink.click()

        await expect(browser).toHaveUrl('https://qa-lab.dev.dnc.pp.ua/login')
    })

    it('should render the login form with required fields', async () => {
        await LoginPage.open()

        await expect(browser).toHaveUrl('https://qa-lab.dev.dnc.pp.ua/login')
        await expect(LoginPage.form).toBeDisplayed()
        await expect(LoginPage.emailInput).toBeDisplayed()
        await expect(LoginPage.passwordInput).toBeDisplayed()
        await expect(LoginPage.submitButton).toHaveText('Login')
        await expect(LoginPage.signUpLink).toHaveText('Sign up')
    })

    it('should navigate from login to sign up page', async () => {
        await LoginPage.open()
        await LoginPage.signUpLink.click()

        await expect(browser).toHaveUrl('https://qa-lab.dev.dnc.pp.ua/signup')
    })

    it('should accept values in the sign up form', async () => {
        const email = `wdio_${Date.now()}@example.com`
        const password = 'Password123!'

        await SignUpPage.open()
        await SignUpPage.signUp(email, password)

        await expect(SignUpPage.emailInput).toHaveValue(email)
        await expect(SignUpPage.passwordInput).toHaveValue(password)
    })

    it('should not sign up with invalid email format', async () => {
        const email = 'invalid-email'
        const password = 'Password123!'

        await SignUpPage.open()
        await SignUpPage.signUp(email, password)

        await expect(browser).toHaveUrl('https://qa-lab.dev.dnc.pp.ua/signup')
        await expect(SignUpPage.emailInput).toHaveValue(email)
        await expect(SignUpPage.passwordInput).toHaveValue(password)
    })

    it('should not sign up with a short password', async () => {
        const email = `wdio_short_${Date.now()}@example.com`
        const password = '123'

        await SignUpPage.open()
        await SignUpPage.signUp(email, password)

        await expect(browser).toHaveUrl('https://qa-lab.dev.dnc.pp.ua/signup')
        await expect(SignUpPage.emailInput).toHaveValue(email)
        await expect(SignUpPage.passwordInput).toHaveValue(password)
    })

    it('should accept values in the login form', async () => {
        const email = 'wdio@example.com'
        const password = 'Password123!'

        await LoginPage.open()
        await LoginPage.login(email, password)

        await expect(LoginPage.emailInput).toHaveValue(email)
        await expect(LoginPage.passwordInput).toHaveValue(password)
    })

    it('should not login with wrong credentials', async () => {
        const email = 'wrong.user@example.com'
        const password = 'WrongPassword123!'

        await LoginPage.open()
        await LoginPage.login(email, password)

        await expect(browser).toHaveUrl('https://qa-lab.dev.dnc.pp.ua/login')
        await expect(LoginPage.emailInput).toHaveValue(email)
        await expect(LoginPage.passwordInput).toHaveValue(password)
    })

    it('should not login with empty password', async () => {
        const email = 'wdio@example.com'
        const password = ''

        await LoginPage.open()
        await LoginPage.login(email, password)

        await expect(browser).toHaveUrl('https://qa-lab.dev.dnc.pp.ua/login')
        await expect(LoginPage.emailInput).toHaveValue(email)
        await expect(LoginPage.passwordInput).toHaveValue(password)
    })
})

