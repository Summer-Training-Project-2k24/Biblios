const express = require("express")

const app = express();
app.post("/",function(req,res)  {
    console.log(req.data);
})
app.listen(5000);