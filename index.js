const express = require('express')
const path = require('path')

const app = express()

const shopRouter = require('./routes/shop')
const adminRouter = require('./routes/admin')

app.use(shopRouter)
app.use(adminRouter)

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(80)