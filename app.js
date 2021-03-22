const express = require("express");
const app = express();
const PORT = process.env.PORT | 5000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

// Import Route
const weatherRoute = require("./routes/weather");

// Use View Engine
app.set('view engine', 'ejs');

// Middleware route
app.use("/", weatherRoute);

app.listen(PORT, () => console.log(`Server starting at port ${PORT}`));
