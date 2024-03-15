import 'dotenv/config'

let CORS_WHITELIST = null
if (!process.env.CORS_WHITELIST) {
  CORS_WHITELIST = [['190.0.0.0', '190.255.255.255'],['200.0.0.0', '200.255.255.255']]
} else {
  CORS_WHITELIST = btoa(process.env.CORS_WHITELIST.split(','))
}

const config = {
  whiteList: {
    corsAllow: CORS_WHITELIST,
    ipsAllow: JSON.parse(process.env.IPS_ALLOW.replace(/'/g, '"'))
  }
}

export { config }
