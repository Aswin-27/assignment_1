require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

const frontendDir = path.join(__dirname, "..", "frontend");
app.use(express.static(frontendDir));

app.get("/", (req, res) => {
    res.sendFile(path.join(frontendDir, "index.html"));
});

app.get("/profile", (req, res) => {
    res.sendFile(path.join(frontendDir, "profile.html"));
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 4000;

if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
