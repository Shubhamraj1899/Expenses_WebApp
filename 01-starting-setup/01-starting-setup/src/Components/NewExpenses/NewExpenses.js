import React, {useState} from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
function NewExpenses(props) {

    const [isEditing,setIsEditing] = useState(false);
     
    function saveExpenseDataHandler (enteredExpenseData){
                const expenseData = {
                    ...enteredExpenseData,
                    id: Math.random().toString()
                };
                //console.log(expenseData);
                props.onAddExpense(expenseData);
                setIsEditing(false);
    }
    function startEditingHandler(){
        setIsEditing(true);
    }
    function stopEditingHandler(){
        setIsEditing(false);
    }
    return(
        <div className ="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
           {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCncel = {stopEditingHandler}></ExpenseForm>}   
        </div>
    );
}

export default NewExpenses;
