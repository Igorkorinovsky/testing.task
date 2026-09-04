import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
  get form() {
    return $('form');
  }

  get emailInput() {
    return $('#email');
  }

  get passwordInput() {
    return $('#password');
  }

  get submitBtn() {
    return $('button[type="submit"]');
  }

  get loginLink() {
    return $('a[href="/login"]');
  }

  async signUp(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.submitBtn.click();
  }

  open() {
    return super.open('signup');
  }
}

export default new SignUpPage();
