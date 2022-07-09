const port = process.env.PORT || 5000
const express = require('express')
const app = express()

app.use(express.static('public'))

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))