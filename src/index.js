import { CreateApp } from './app.js'

const port = process.env.PORT || 3000

const app = new CreateApp().createApp()

app.listen(port)
