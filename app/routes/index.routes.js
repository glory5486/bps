const routes = require("express").Router();
const authorize = require("../middlewares/authorize");

routes.use("/user", require(".user.routes"));
routes.use("/tahunajaran", authorize, require(".tahun.ajaran.routes"));
routes.use("/satuan", authorize, require(".satuan.routes"));
routes.use("/kategori", authorize, require(".kategori/kategori.routes"));
routes.use("/subkategori", authorize, require(".kategori/sub.kategori.routes"));

module.exports = routes;