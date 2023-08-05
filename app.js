require("dotenv").config();
const express = require("express");
const boom = require("express-boom");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(boom());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT","PATCH", "DELETE"],
  })
);
app.use(require("./app/routes/index.routes"));


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));