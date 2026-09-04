import { browser } from '@wdio/globals'

export default class Page {
  async open(path = ''): Promise<void> {
    await browser.url(`https://qa-lab.dev.dnc.pp.ua/${path}`)
  }
}
