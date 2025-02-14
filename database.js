

const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config(); 

const app = express();
const PORT = 3000;
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port:3306
});
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL Database!");
});

app.get("/", (req, res) => {
    res.send("Express server is running...");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
