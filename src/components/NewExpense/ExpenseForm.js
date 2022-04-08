import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput,setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // })

  const titleChangeHandller = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // });
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle:event.target.value};
    // })
  };
  const amountChangeHandller = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // });
  };
  const dateChangeHandller = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // });
  };



  const submitHandller = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');

  };

  return (
    <form onSubmit={submitHandller}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandller}></input>
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandller}
            min="0.01"
            step="0.01"
          ></input>
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandller} min="2019-01-01" step="2022-12-31"></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
