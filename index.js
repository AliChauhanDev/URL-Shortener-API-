const express = require('express');

const URL = require('./models/url');
const { connectToMongoDB } = require('./dbconnect')
const urlroutes = require('./routes/url')
const app = express()
const port = 8001

// Connect to MongoDB
connectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => { console.log("Connected to MongoDB") })

//medddlewere for reading body data 
app.use(express.json());

app.use("/url", urlroutes)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})