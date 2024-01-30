const express = require('express');
const mongoose = require('mongoose');
const Expense = require('./models/expenses');

const app = express();
const port = 3000;

app.use(express.json());

// CONNECTION TO MONGODB
mongoose.connect('mongodb+srv://gokilavanic20msc:philosopher_26@cluster0.seny4i4.mongodb.net/expense-tracker?retryWrites=true&w=majority', {
    useUnifiedTopology:true
})

//GET
app.get('/expenses', async (req, res) => {
   try{
        const expenses = await Expense.find();
        if(expenses)
        {
            res.send(expenses);
        }
        else{
            res.send("No user found");
        }
   }
   catch(err){
        res.send(err);
   }
})

//GET BY ID
app.get('/expenses/:id', async (req, res) => {
   try{
        const id = req.params.id;
        const expenses = await Expense.findById(id);
        if(expenses)
        {
            res.send(expenses);
        }
        else{
            res.send("No user found with such id");
        }
    }
    catch(err){
        res.send(err);
    }
})

//DELETE
app.delete('/expenses/:id', async (req, res) => {
   try{
        const id = req.params.id;
        const expenses = await Expense.findByIdAndDelete(id);
         if(expenses){
            res.send(expenses)
         }
         else{
            res.send("No user found with such id");
         }
      
   }
   catch(err){
    res.send(err);
   }
})

//POST
app.post('/expenses', async (req, res) => {
    try{
        const newExpense = req.body;
        await Expense.create(newExpense);
             res.send("Created");
     }
     catch(err){
         res.send(err);
     }
 })

 //PUT
app.put('/expenses/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const newExpense = req.body;
        await Expense.findByIdAndUpdate(id, {$set: newExpense});
             res.send("Updated");
     }
     catch(err){
         res.send(err);
     }
 })

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

