const express = require("express");
const server = express();
const path = require("path");
const manifest = require("./dist/server/ssr-manifest.json");
const appPath = path.join(__dirname, "./dist", "server", manifest["app.js"]);
const createApp = require(appPath).default;
const fs = require("fs");
// 搭建静态资源目录
server.use(
  "/",
  express.static(path.join(__dirname, "./dist","client"), { index: false })
);
// 获取模板
const indexTemplate = fs.readFileSync(
  path.join(__dirname, "./dist", "client","/index.html"),
  "utf-8"
);

server.get("*", async (req, res) => {
  try {
    const appContent = await createApp(req);
    let html = indexTemplate
    .toString()
    .replace('<div id="app">', `<div id="app">${appContent}`);

  res.setHeader("Content-Type", "text/html");
  res.send(html);
    
  } catch (error) {
    console.log(error);
    if (error.code == 404) {
      res.status(404).send("页面去火星了，找不到了，404啦");
      return;
    }
    res.status(500).send("服务器错误");
  }
});

server.listen(9000, () => console.log("the server is running 9000"));
