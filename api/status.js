const express = require('express')

const app = express()

app.get('/ping', (req, res) => {
	res.json({
		ping: 'Ping'
	})
})

app.get('/pong', (req, res) => {
	res.json({
		pong: 'Pong'
	})
})

module.exports = {
	path: '/api/status/',
	handler: app
}
