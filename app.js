const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))