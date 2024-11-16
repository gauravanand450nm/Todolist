
const express = require('express');
const app = express();
const cors = require('cors');

const { createTodo, updateTodo } = require("./types");
const {Todo, connectDB}  = require("./db");

app.use(cors());

app.get("/todos", async function(req, res){

//    res.send("hello motto");
   const todos = await Todo.find({});
   res.json({todos});
    
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.post("/todos", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log("aa gya tera bhai",req.body)

    if (!parsedPayload.success) {
        console.log("Validation Error:", parsedPayload.error.errors);
        res.status(401).send("You have entered wrong inputs");
        return;
    }

    const validatedData = parsedPayload.data;

    await Todo.create({
        title: validatedData.title,
        desc: validatedData.desc,
        completed: false
    });

    const todos = await Todo.find({});
    res.json({
        msg: "Todo created successfully",
        todos,
    });
});


app.put("/completed", async function(req, res){

   const updatePayload = req.body;
   const parsedPayload = updateTodo.safeParse(updatePayload);
   if(!parsedPayload.success)
   {
    res.status(411).json({
        msg: "you have entered wrong input"
    })
    return ;
   }
   
   await Todo.updateOne({
    _id: req.body.id
   },{
    completed: true
   })

   res.json({
    msg: "todo marked as completed"
   })

})

app.listen(3000 , ()=>{
}
);
