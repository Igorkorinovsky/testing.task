import { Page, Locator } from '@playwright/test'
import { BasePage } from './page.js'

export class SignUpPage extends BasePage {
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

  get submitBtn(): Locator {
    return this.page.locator('button[type="submit"]')
  }

  get loginLink(): Locator {
    return this.page.locator('a[href="/login"]')
  }

  async signUp(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.submitBtn.click()
  }

  async open(): Promise<void> {
    await super.open('signup')
  }
}

