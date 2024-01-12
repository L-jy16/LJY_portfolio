const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/image", express.static("./image"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express router
app.use("/api/reple", require("./server/router/reple.js"));

app.listen(port, () => {
    mongoose
        .connect("mongodb+srv://leejiyoung492:rhqnr1159*@reple.13k0zkv.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});