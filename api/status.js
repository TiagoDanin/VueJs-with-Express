const express = require('express')

const app = express()

app.get('/ping', (request, response) => {
	response.json({
		ping: 'Ping'
	})
})

app.get('/pong', (request, response) => {
	response.json({
		pong: 'Pong'
	})
})

module.exports = {
	path: '/api/status/',
	handler: app
}
