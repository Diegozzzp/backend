import express, { Router } from 'express'

class CreateApp {
  constructor() {
    this.app = express()
    this.router = Router()
  }

  createApp() {
    this.app.use('/api/v1', this.router)

    this.router.get('/', (req, res) => {
      res.send('Hello World!')
    })

    return this.app;
  }
}

export { CreateApp }
