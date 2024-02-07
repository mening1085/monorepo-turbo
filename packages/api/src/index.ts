const cors = require("cors");
const express = require("express");

import { Workspace } from "types";

const app = express();
const port = 5555;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/workspaces", (_, response) => {
  const workspaces: Workspace[] = [
    { name: "api", version: "1.0.0", note: "This is the API" },
    { name: "types", version: "1.0.0", note: "This is the types" },
    { name: "web", version: "1.0.0", note: "This is the web" },
  ];
  response.json({ data: workspaces });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
