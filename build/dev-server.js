const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const indexHTML = (() => {
    return fs.readFileSync(path.resolve(__dirname, "../src/index.html"), "utf-8");
})();

app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

require('./dev-server-config')(app);

app.get("*", (req, res) => {
  res.write(indexHTML);
  res.end();
})


app.listen(port, () => {
  console.log(`Dev server started at http://localhost:${port}`);
});
