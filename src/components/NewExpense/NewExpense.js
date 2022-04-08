import react, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [flag, setFlag] = useState(false);

  const saveExpenseDataHandller = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const newButtonHandller = () => {
    setFlag(true);
  };
  const canselButtonHandller = () => {
    setFlag(false);
  };

  return (
    <div className="new-expense">
      {flag == true ? (
        <div>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandller} />
          <button onClick={canselButtonHandller}>Cansel</button>
        </div>
      ) : (
        <button onClick={newButtonHandller}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
