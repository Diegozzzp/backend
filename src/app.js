import express, { Router } from 'express'
import cors from 'cors'
import { config } from '../config/config.js'
import pkg from 'express-ipfilter';

const { IpFilter } = pkg;

const { corsAllow, ipsAllow } = config.whiteList


let whiteList = {}
let clientIp

whiteList['cors'] = {
  origin: [atob(corsAllow)],
}

whiteList['ips'] = function() {
  return ipsAllow
}

clientIp = function(req) {
  return req.headers['x-forwarded-for'] ? (req.headers['x-forwarded-for']).split(',')[0] : ""
}


const createApp = () => {
  const app = express()
  const router = Router()

  // middlewares
  app.use(cors(whiteList.cors))

  // Development | is used to validated IPs Address
  // app.use(function(req, res, next) {
	// 	IpFilter(whiteList.ips, {mode: "allow", log: false, detectIp: clientIp})(req, res, function(err) {
	// 		if (err === undefined) {
	// 			return next();
	// 		}
	// 		res.status(403).json({
  //       message: 'Forbidden',
  //       code: 403,
  //       error: "You are not authorized to access this page.",
  //     });
	// 	});
	// });

  app.get('/', (req, res) => {
    const htmlResp = `
    <html>
    <head>
      <title>
        NodeJs and Express on Vercel
      </title>
    </head>
    <body>
      Iam project backend on version 'v1'
    </body>

    <section>
      <p>Integrants:</p>

      <ul>
        <li>
          Pedro Montes
        </li>
        <li>
          Carlos Palacios
        </li>
      </ul>
    </section>
  </html>
    `
    res.send(htmlResp)
  })

  app.use('/api/v1', router)

  router.get('/', (req, res) => {
    res.send('Hello World!')
  })

  return app
}

export { createApp }
