// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    // Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { // Change this line
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

};

module.exports = connectDB;
