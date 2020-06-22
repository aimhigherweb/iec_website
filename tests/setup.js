const PUPPETEER_OPTIONS = {
  headless: true,
  args: [
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--single-process',
    "--proxy-server='direct://'",
    '--proxy-bypass-list=*',
    '--deterministic-fetch'
  ]
}

const TIMEOUT = 30000
const VIEW_PORT = { width: 1920, height: 1080 }
const TMP_DIR = 'tmp'

module.exports = { PUPPETEER_OPTIONS, TIMEOUT, VIEW_PORT, TMP_DIR }
