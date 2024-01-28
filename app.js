const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));


var indexRouter = require("./routes/index");
app.use('/',indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})



module.exports = app;