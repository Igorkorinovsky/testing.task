import { $ } from '@wdio/globals'
import Page from './page.js'

class LoginPage extends Page {
  get form() {
    return $('form')
  }

  get emailInput() {
    return $('#email')
  }

  get passwordInput() {
    return $('#password')
  }

  get submitButton() {
    return $('button[type="submit"]')
  }

  get signUpLink() {
    return $('a[href="/signup"]')
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.setValue(email)
    await this.passwordInput.setValue(password)
    await this.submitButton.click()
  }

  async open(): Promise<void> {
    await super.open('login')
  }
}

export default new LoginPage()
