const puppeteer = require('puppeteer')
const { PUPPETEER_OPTIONS, TIMEOUT, VIEW_PORT, TMP_DIR } = require('../setup')
const pathfile = '/'
const pathid = 'home'

test(`View page: ${pathfile}`, async () => {
  jest.setTimeout(TIMEOUT)
  let url = process.env.URL
  const browser = await puppeteer.launch(PUPPETEER_OPTIONS)
  const page = await browser.newPage()
  await page.setViewport(VIEW_PORT)
  await page.goto(url)

  await page.waitForSelector('div.container')
  await page.waitForSelector('h1')
  expect(
    await page.evaluate(() => {
      const element = document.querySelector('h1')
      return element && element.innerText
    })
  ).toBe('Welcome to Innovative Eye Care')

  await page.screenshot({ path: `${TMP_DIR}/${pathid}0.png` })
  await browser.close()
})
