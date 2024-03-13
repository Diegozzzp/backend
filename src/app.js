import express, { Router } from 'express'
import cors from 'cors'
import { config } from '../config/config.js'

const { corsAllow } = config.whiteList

let whiteList = {}

whiteList['cors'] = {
  origin: atob(corsAllow),
}

const createApp = () => {
  const app = express()
  const router = Router()

  // middlewares
  app.use(cors(whiteList.cors))
  app.use('/api/v1', router)

  router.get('/', (req, res) => {
    res.send('Hello World!')
  })

  return app
}

export { createApp }
