import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get form() {
        return $('form');
    }

    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get submitButton() {
        return $('button[type="submit"]');
    }

    get signUpLink() {
        return $('a[href="/signup"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();
