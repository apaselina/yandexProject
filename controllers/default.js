const path = require("path");
const staticFile = require("../appModules/http-utils/static-file");
const mimeTypes = require("../appModules/http-utils/mime-types");

async function defaultRouteController(res, url) {
  //path.extname возвращает расширение файла из заданного пути
  const extname = String(path.extname(url)).toLowerCase();
  console.log(extname);
  if (extname in mimeTypes) {
    staticFile(res, url, extname);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}

module.exports = defaultRouteController;
