const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 6006;

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/initialLoad", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("initialLoad");
  res.end(
    JSON.stringify({
      data: {
        appName: "Express APP",
        msg: "hello from express app",
      },
    })
  );
});

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
