import 'dotenv/config'

const config = {
  whiteList: {
    corsAllow: btoa(process.env.CORS_WHITELIST.split(','))
  }
}

export { config }
