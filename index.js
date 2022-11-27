var express = require("express");
var app = express();
var isOpen = false;



app.get("/open", (req, res, next) => {
    isOpen = true;
    res.send("Complete")
   });

app.get("/close", (req, res, next) => {
    isOpen = false;
    res.send("Complete")
   });

app.get("/checkDoor", (req, res, next) => {
    
    res.send(isOpen)
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});