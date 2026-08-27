import { WebServer } from '@/infra/web-server.js'
import retry from 'async-retry'

const webServer = new WebServer()

async function fetchStatusPage() {
  const response = await fetch(`${webServer.getServer()}/api/v1/status`)

  await response.json()
}

async function waitForWebServer() {
  return retry(fetchStatusPage, {
    retries: 100,
  })
}

async function waitForAllServices() {
  await waitForWebServer()
}

export default { waitForAllServices }
