class WebServer {
  getServer() {
    if (['test', 'development'].includes(process.env.NODE_ENV!)) {
      return 'http://localhost:3000'
    }
  }
}

export { WebServer }
