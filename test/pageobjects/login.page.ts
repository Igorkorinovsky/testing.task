import { Page, Locator } from '@playwright/test'
import { BasePage } from './page.js'

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  get form(): Locator {
    return this.page.locator('form')
  }

  get emailInput(): Locator {
    return this.page.locator('#email')
  }

  get passwordInput(): Locator {
    return this.page.locator('#password')
  }

  get submitButton(): Locator {
    return this.page.locator('button[type="submit"]')
  }

  get signUpLink(): Locator {
    return this.page.locator('a[href="/signup"]')
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }

  async open(): Promise<void> {
    await super.open('login')
  }
}

