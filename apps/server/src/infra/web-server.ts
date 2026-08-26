type Environment = 'development' | 'test' | 'production'

const ENVIRONMENT_SERVER_URLS: Record<Environment, string> = {
  test: 'http://localhost:3000',
  development: 'http://localhost:3000',
  production: 'https://cao-events-server.onrender.com',
}

class WebServer {
  getServer() {
    if (!process.env.NODE_ENV) {
      throw new Error('No environment variable defined in `.env` file.')
    }

    return ENVIRONMENT_SERVER_URLS[process.env.NODE_ENV as Environment]
  }
}

export { WebServer }
