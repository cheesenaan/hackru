const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) => {
    res.send('Hello from APIv1 root route.');
});

router.get('/register', async (req, res) => {
    res.send('Hello from APIv1 root route.');
});

  module.exports = router;
