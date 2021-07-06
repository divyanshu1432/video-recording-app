const express = require('express');
const app = express();

const port = process.env.PORT || 8000;



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.htm");
})


app.get('/recorder', (req, res) => {
    res.sendFile(__dirname + "/recorder.htm");
})


app.listen(port, () => {
    console.log("Application started and Listening on port" + port);
});