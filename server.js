const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/.env' })

const app = express();

// GET /api/v1/bootcamps
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all Bootcamps' })
});

// GET /api/v1/bootcamps/:id
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show bootcamps ${req.params.id}` })
});

// POST /api/v1/bootcamps
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new Bootcamps' })
});

// PUT /api/v1/bootcamps
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamps ${req.params.id}` })
});

// DELETE /api/v1/bootcamps
app.delete('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamps ${req.params.id}` })
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT} `));
