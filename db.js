const mongoose = require('mongoose');

const  connectDB = async () =>{
    await mongoose.connect("mongodb+srv://211210023:gaurav@cluster0.ixlso.mongodb.net/mytodo").then(()=>console.log("DB Connected"))
}

// mongoose.connect("mongodb+srv://211210023:gaurav@cluster0.ixlso.mongodb.net/mytodo");


const todoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    completed: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
    Todo,
    connectDB
};
