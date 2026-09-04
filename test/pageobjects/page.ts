import { browser } from '@wdio/globals'

export default class Page {
  open(path = ''): Promise<string> {
    return browser.url(`https://qa-lab.dev.dnc.pp.ua/${path}`)
  }
}
