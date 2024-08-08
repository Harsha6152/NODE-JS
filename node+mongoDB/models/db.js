const { log } = require('handlebars')
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/StudentDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connection successful');
    } catch (err) {
        console.error('Database connection error:', err);
    }
}
require('./student.model')

connectDB();


