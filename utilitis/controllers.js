let controllers = {};
const model = require('../db/setup');
controllers.SendMessages = async (req,res)=>{
    await model(req.body,(err)=>{if(err){res.status(400).json({status:"fail",message:"Message Not Sent!!"})}}).save()
    res.json({status:"Done",message:"User Has Scussfully Sent Message"})
}
module.exports = controllers