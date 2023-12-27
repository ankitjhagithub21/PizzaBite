const express = require('express')
const connectDb = require('./conn')
const cors = require("cors")
const cookieParser = require('cookie-parser')
const router = require('./routes/authRoutes')
const app = express()
const port = 3000

connectDb()

app.use(express.json())
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true,
  }
))
app.use(cookieParser())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/auth", router)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})