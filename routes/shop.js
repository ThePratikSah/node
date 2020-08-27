const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', "views", "index.html"));
})

router.post('/', (req, res) => {
  res.redirect('/');
})

router.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, '../', "views", "product.html"));
})

module.exports = router;