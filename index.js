const express = require("express");
const app = express();
app.use(express.json());
const pdfRoute = require("./routes/pdf");
var cors = require('cors')
app.use(
    cors({
        "origin": "http://localhost:3000",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 200
      })
  );

// Routes
app.use("/api/generatepdf", pdfRoute)

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Server is running " + PORT + " port");
})