import { WebServer } from '@/infra/web-server.js'
import retry from 'async-retry'

const webServer = new WebServer()

async function fetchStatusPage() {
  const response = await fetch(`${webServer.getServer()}/api/v1/status`)

  if (response.status !== 200) {
    throw new Error('Failed to fetch services status.')
  }
}

async function waitForWebServer() {
  return retry(fetchStatusPage, {
    retries: 100,
    maxTimeout: 1000,
    onRetry: (error, attempt) => {
      console.log(
        `Attempt: ${attempt} - Failed to fetch services status: ${(error as Error).message}`
      )
    },
  })
}

async function waitForAllServices() {
  await waitForWebServer()
}

export default { waitForAllServices }
