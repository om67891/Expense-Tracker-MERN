require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require('path');
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const incomeRoutes = require("./routes/incomeRoutes")
const expenseRoutes = require("./routes/expenseRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")

const app = express();

//Middleware to Handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

connectDB();

app.use("/api/vl/auth", authRoutes);
app.use("/api/vl/income", incomeRoutes);
app.use("/api/vl/expense", expenseRoutes);
app.use("/api/vl/dashboard", dashboardRoutes);

//serve uploads folder

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
