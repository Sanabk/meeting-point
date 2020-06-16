const express = require('express')
require ('./db/mongoose')
const userRouter = require('./routers/user')
const locationRouter = require('./routers/location')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(locationRouter)

app.listen(port, () => {
    console.log(`Server started on port`+ port);
})  