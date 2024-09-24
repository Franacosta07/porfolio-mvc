
const router = require("express").Router();
const indexController = require("../controllers/indexController");
router.get("/", indexController.index);

router.get("/about", indexController.about)
























/* ESTO VA AL FINAL DE TODO PARA QUE EXPORTE LAS RUTAS*/
module.exports = router;