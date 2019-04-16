const express = require('express')
const app = express()

app.get('/ping', (req, res, next) => {
	res.json({
		ping: 'Ping'
	})
})

app.get('/pong', (req, res, next) => {
	res.json({
		pong: 'Pong'
	})
})

module.exports = {
	path: '/api/status/',
	handler: app
}
