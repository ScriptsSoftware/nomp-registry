const express = require("express");

const app = express();

app.use(express.json());

const packages = {
  "hello-nomp": {
    name: "hello-nomp",
    version: "1.0.0",
    description: "Example package for nomp",
    download: "https://example.com/hello-nomp.tgz"
  }
};

app.get("/", (req, res) => {
  res.send("Nomp Registry is running");
});

app.get("/package/:name", (req, res) => {
  const pkg = packages[req.params.name];

  if (!pkg) {
    return res.status(404).json({
      error: "Package not found"
    });
  }

  res.json(pkg);
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Nomp Registry running");
});
