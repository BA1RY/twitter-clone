const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req,res, next) => {
  res.send('Hello from users!');
});

module.exports = router;