const path = require('path');
const express = require("express");
const publicPath = path.join(__dirname, '../public');
let port = process.env.PORT || 3000
let servingDir = express.static(publicPath);
let app = express();
app.use(servingDir);
// app.get("/", (req, res)=>{
//     res.send("listening bro");
// });
app.listen(port);

