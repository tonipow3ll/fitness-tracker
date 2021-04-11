const { response } = require('express');
const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});
module.exports = router;