import React, {useState} from 'react';

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isAddNewExpense,setIsAddNewExpense] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }

  const addExpenseHandler = () => {
    setIsAddNewExpense(true);
  }

  const cancelAddingHandler = () => {
    setIsAddNewExpense(false);
  }
  return (
    <div className="new-expense">
      {!isAddNewExpense && <button onClick={addExpenseHandler}>Add New Expense</button>}
      {isAddNewExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddingHandler}/>}
      
    </div>
  );
}

export default NewExpense;
