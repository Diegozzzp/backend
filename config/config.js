import 'dotenv/config'

const config = {
  whiteList: {
    corsAllow: btoa(process.env.CORS_WHITELIST.split(',')),
    ipsAllow: JSON.parse(process.env.IPS_ALLOW.replace(/'/g, '"'))
  }
}

export { config }
