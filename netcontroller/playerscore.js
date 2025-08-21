const { playerscores } = require("../models");

exports.createScore = async (req, res) => {
    try {
        const { goals, assist, redCard, yellowCard } = req.body;
        const newScore = await playerscores.create({ goals, assist, redCard, yellowCard });
        res.status(201).json({
            message: "Player score successfully added",
            data: newScore
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};
exports.findAll = async(req,res)=>{
    try{
        const allStudent = await playerscores.findAll()
    res.status(200).json({
        message:"kindly find below all student",
          data:allStudent
    })
}catch(error){
    res.status(500).json({
        message:"internal error",
        error:error.message
    })
  }
}
exports.findOne = async(req,res)=>{
    try {
        const { id } = req.params;
        const getOne = await playerscores.findByPk(id);
        if (!getOne) {
            return res.status(404).json({ message: "Student not found", data: null });
        }
        res.status(200).json({ message: "Student found", data: getOne });
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        });
    }
}
exports.updateScore = async (req, res) => {
    try {
        const { studentId } = req.params;
        const { goals, assist, redCard, yellowCard } = req.body;
        const score = await playerscores.findByPk(studentId);
        if (!score) {
            return res.status(404).json({ message: "Player score not found" });
        }
        const updatedScore = await score.update({ goals, assist, redCard, yellowCard });
        res.status(200).json({
            message: "Player score updated",
            data: updatedScore
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};
exports.Delete = async(req,res)=>{
    try {
        const { id } = req.params;
        const deleted = await playerscores.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student successfully deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        });
    }
}