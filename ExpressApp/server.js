const express = require("express");

const app = express();
const PORT = 6006;

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
