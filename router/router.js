const router = require("express").Router()
const { createStudent, findAll, findOne, update,Delete } =
	require("../netcontroller/netcontroller");

router.post("/student", createStudent)
router.get("/student", findAll)
router.get("/student", findOne)
router.put("/studentupdate/:id", update)
router.delete("/student:id", Delete)


module.exports = router