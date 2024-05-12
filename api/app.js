import express from "express";
const app = express();
console.log("hii");
app.listen(8800, () => {
    console.log("Connected to backend.");
})