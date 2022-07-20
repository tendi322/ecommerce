const express = require('express')
const cors = require('cors')
const app = express()
const hbs = require('hbs')
const router = require('./routes/productRoute')
const connectDb = require('./database/connection')
app.use(express.static(__dirname +'/public'))
hbs.registerPartials(__dirname + '/views/partials')
app.use(cors())
app.use(express.json())
app.set('view engine', 'hbs')

app.use('/api/product', router)

connectDb()
app.listen(4000, () => {
  console.log(`Server is listening at port ${4000}`)
})
