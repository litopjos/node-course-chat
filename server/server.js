var path = require("path");
const express = require ('express');

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

// console.log (__dirname + "/../public");
// console.log(publicPath);

const app = express();

// Setting up a static directory.
app.use(express.static(publicPath));

app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});
