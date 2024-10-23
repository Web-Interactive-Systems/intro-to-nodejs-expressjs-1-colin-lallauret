const http = require("http");
const fs = require("fs");
const path = require("path");

/**
 Todo Complete this app to serve the content inside `static` folder
 
 - Create an http server that serves the app in: `static/html/index.html`
 - The app shows navigation pages that should be created and placed inside `static/html`
 - If an url is not found the app should serve "Page not found"

 -- Hint, it possible to read a file using `readFileSync` of fs module and serve it to the client
 */

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const filePath = path.join(__dirname, "static/html/index.html");
    const content = fs.readFileSync(filePath);
    res.end(content);
  } else if (req.url === "/js/app.js") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    const fileJsPath = path.join(__dirname, "static/js/app.js");
    const appJs = fs.readFileSync(fileJsPath);
    res.end(appJs);
  } else if (req.url === "/css/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const fileCssPath = path.join(__dirname, "static/css/styles.css");
    const appCss = fs.readFileSync(fileCssPath);
    res.end(appCss);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);
