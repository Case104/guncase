import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/guncase', (err) => {
	if (err) {
		console.warn('Failed connecting to mongodb', err)
	} else {
		console.log('Successfully connected to mongodb')
	}
});
