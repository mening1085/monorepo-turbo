// src/index.ts
var cors = require("cors");
var express = require("express");
var app = express();
var port = 5555;
app.use(cors({ origin: "http://localhost:3000" }));
app.get("/workspaces", (_, response) => {
  const workspaces = [
    { name: "api", version: "1.0.0", note: "This is the API" },
    { name: "types", version: "1.0.0", note: "This is the types" },
    { name: "web", version: "1.0.0", note: "This is the web" }
  ];
  response.json({ data: workspaces });
});
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
