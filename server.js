const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, "database.json");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Read chores
app.get("/api/chores", (req, res) => {
  fs.readFile(DB_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read database" });
    const chores = JSON.parse(data || "[]");
    res.json(chores);
  });
});

// Add new chore
app.post("/api/chores", (req, res) => {
  const newChore = req.body;
  fs.readFile(DB_PATH, "utf8", (err, data) => {
    const chores = data ? JSON.parse(data) : [];
    chores.push(newChore);
    fs.writeFile(DB_PATH, JSON.stringify(chores, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Failed to write database" });
      res.status(201).json(newChore);
    });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Cozy Chore Server running at http://localhost:${PORT}`);
});
