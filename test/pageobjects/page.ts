import { Page } from '@playwright/test'

export class BasePage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async open(path: string = ''): Promise<void> {
    await this.page.goto(`https://qa-lab.dev.dnc.pp.ua/${path}`)
  }
}

