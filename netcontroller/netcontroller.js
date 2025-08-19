const {playerdb} = require("../models")


exports.createStudent = async(req,res) => {
    try{
    const { playerName, playerAge, playerCountry, playerWages } = req.body;
    const newStudent = await playerdb.create({ playerName, playerAge, playerCountry, playerWages });
        res.status(200).json({
            message:"student successfully added",
            data:newStudent
        })
    } catch (error){
res.status(500).json({
    message:"internal error",
    error:error.message
})
 }
};
exports.findAll = async(req,res)=>{
    try{
        const allStudent = await playerdb.findAll()
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
        const getOne = await playerdb.findByPk(id);
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
exports.update = async (req,res)=>{
    try {
        const findStudent = await playerdb.findByPk(req.params.id);
        if (!findStudent) {
            return res.status(404).json({
                message: "Student with the above id does not exist"
            });
        }
        const { playerName, playerAge, playerCountry, playerWages } = req.body;
        const updateinfo = await findStudent.update({ playerName, playerAge, playerCountry, playerWages });
        res.status(200).json({
            message: "Update performed",
            data: updateinfo
        });
    } catch (error) {
        res.status(500).json({
            message: "internal error",
            error: error.message
        });
    }
}
exports.Delete = async(req,res)=>{
    try {
        const { id } = req.params;
        const deleted = await playerdb.destroy({ where: { id } });
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