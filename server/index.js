const fs = require('fs')
const {Nuxt, Builder} = require('nuxt')
const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const server = express()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const key = fs.readFileSync('./cert/selfsigned.key')
const cert = fs.readFileSync('./cert/selfsigned.crt')

const config = require('../nuxt.config.js')

config.dev = !(process.env.NODE_ENV === 'production')
config.server = {
	port,
	host,
	https: {
		key,
		cert
	}
}
const nuxt = new Nuxt(config)

if (config.dev) {
	const builder = new Builder(nuxt)
	builder.build()
}

server.use(
	cookieSession({
		name: 'session',
		keys: ['app name', '25538@tiagodanin']
	})
)
server.use(
	bodyParser.urlencoded({
		extended: false
	})
)

server.use(nuxt.render)
server.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
