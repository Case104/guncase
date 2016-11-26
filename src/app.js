import express from 'express'
import router from './api'

const app = express();

require('./database');

app.listen(3000, () => {
	console.log('Server running on port 3000')
})