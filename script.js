const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`) ;
})
app.post('/', (req, res) => {
    let query = req.query;
    res.send(`<h1>hello ${query.name}!</h1>`);
})