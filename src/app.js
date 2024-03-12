import express, { Router } from 'express'

const createApp = () => {
  const app = express()
  const router = Router()

  app.use('/api/v1', router)

  router.get('/', (req, res) => {
    res.send('Hello World!')
  })

  return app
}

export { createApp }
