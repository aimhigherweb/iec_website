const puppeteer = require('puppeteer')
const { PUPPETEER_OPTIONS, TIMEOUT, VIEW_PORT, TMP_DIR } = require('../setup')
const pathfile = 'who-we-are'

test(`View page: /${pathfile}`, async () => {
  jest.setTimeout(TIMEOUT)
  let url = process.env.URL
  const browser = await puppeteer.launch(PUPPETEER_OPTIONS)
  const page = await browser.newPage()
  await page.setViewport(VIEW_PORT)
  await page.goto(url + `/${pathfile}`)

  await page.waitForSelector('.content-section__haeding')
  expect(
    await page.evaluate(() => {
      const element = document.querySelector('h1')
      return element && element.innerText
    })
  ).toBe('Who We Are')

  await page.screenshot({ path: `${TMP_DIR}/${pathfile}.png` })
  await browser.close()
})
