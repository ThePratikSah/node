const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../', "views", "admin.html"))
})

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))
})

router.post("/product", (req, res) => {
  res.redirect("/admin")
})

module.exports = router;