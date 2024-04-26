const fs = require('fs');
const mongoose =  require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/.env' });

// Load models
const Bootcamps = require('./models/Bootcamp');

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))

// Import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps);

        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}