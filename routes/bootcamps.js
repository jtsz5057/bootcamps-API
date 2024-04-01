const express = require('express');
const router = express.Router()

// GET /api/v1/bootcamps
router.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all Bootcamps' })
});

// GET /api/v1/bootcamps/:id
router.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show bootcamps ${req.params.id}` })
});

// POST /api/v1/bootcamps
router.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new Bootcamps' })
});

// PUT /api/v1/bootcamps
router.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamps ${req.params.id}` })
});

// DELETE /api/v1/bootcamps
router.delete('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamps ${req.params.id}` })
});