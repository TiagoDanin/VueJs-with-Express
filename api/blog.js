const express = require('express')

const app = express()

const posts = [{
	title: 'Hello!',
	body: 'Hello my friends!'
}, {
	title: 'I am',
	body: 'My name is Tiago Danin'
}]

app.get('/', (request, response) => {
	response.json({
		posts
	})
})

module.exports = {
	path: '/api/blog/',
	handler: app
}
