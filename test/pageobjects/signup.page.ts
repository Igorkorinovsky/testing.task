import { $ } from '@wdio/globals'
import Page from './page.js'

class SignUpPage extends Page {
  get form() {
    return $('form')
  }

  get emailInput() {
    return $('#email')
  }

  get passwordInput() {
    return $('#password')
  }

  get submitBtn() {
    return $('button[type="submit"]')
  }

  get loginLink() {
    return $('a[href="/login"]')
  }

  async signUp(email: string, password: string): Promise<void> {
    await this.emailInput.setValue(email)
    await this.passwordInput.setValue(password)
    await this.submitBtn.click()
  }

  async open(): Promise<void> {
    await super.open('signup')
  }
}

export default new SignUpPage()
