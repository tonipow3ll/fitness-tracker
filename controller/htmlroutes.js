const { response } = require('express');
const express = require('express');
const path = require('path')
const router = express.Router();

//Get index (home page)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//Get exercise page(s)
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

//Get Stats page

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;