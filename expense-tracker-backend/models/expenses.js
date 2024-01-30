const mongoose = require('mongoose');
const expenseScheme =  new mongoose.Schema({
    amount:Number,
    desc:String,
    title:String,
});
  
const Expense = mongoose.model('Expense', expenseScheme);
module.exports = Expense;