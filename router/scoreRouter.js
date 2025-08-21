const router = require("express").Router();
const { createScore,findAll,findOne,updateScore,Delete } = require("../netcontroller/playerscore");

router.post("/scores/:studentId", createScore);
router.get("/scores", findAll);
router.get("/scores/:id", findOne)
router.put("/updatedscores/:studentId", updateScore)
router.delete("/scores/:id", Delete)

module.exports = router;