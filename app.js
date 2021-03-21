const express = require("express");
const app = express();
const PORT = process.env.PORT | 5000;

// Import Route
const weatherRoute = require("./routes/weather");

// Use View Engine
app.set('view engine', 'ejs');

// Middleware route
app.use("/", weatherRoute);
app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server starting at port ${PORT}`));
