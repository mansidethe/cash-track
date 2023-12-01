import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

const [transactions, setTransactions] = useState([]);
const [creditSum, setCreditSum] = useState (0);
const [debitSum, setDebitSum] = useState (0);

const CATEGORY_EMOJI_MAP = {
  "food":"🥗",
  "entertainment":"🎺",
  "rent":"🏠",
  "shopping":"🛍",
  "travel":"✈",
  "education":"📚",
  "freelansing":"💻side",
  "side-hussle":"👔👗",
  "other":"🤷‍♂️"
}

const loadTransactions = async () =>{
const response = await axios.get("/api/transactions");

let totalCredit = 0;
let totalDebit = 0;

const transactionData = response?.data?.data;

transactionData.forEach((transaction) => {
  if(transaction.type==="credit"){
    totalCredit += transaction.amount;
  }
  else{
    totalDebit += transaction.amount;
  }
});

setTransactions(transactionData);

setCreditSum (totalCredit);
setDebitSum (totalDebit)
};

useEffect(()=>{
  loadTransactions();
},[])

  return (
    <div className='container'>
      <h1>All Expenses</h1>
      <h2>Credit: {creditSum}</h2>
      <h2>Debit: {debitSum}</h2>

      {
        transactions?.map((transaction, index)=>{
const {_id, amount, type, category, description, createdAt} = transaction;

const date = new Date(createdAt).toLocaleDateString();
const time = new Date(createdAt).toLocaleTimeString();



 return (
            <div key = {index} className='transaction-card' >
<span className={`transaction-amount ${type==="debit" ? "debit-amount" : "credit-amount"}`}>
  {type === "debit" ? "-" : "+"}
  {amount}</span>

{type==="debit"?"debited":"credited"} on{date }  at{time}

<span className='transaction-category'>
  {CATEGORY_EMOJI_MAP[category]}
  {category}</span>
  <hr/>{description}
            </div>
          )
        })
      }
    </div>
  )
}

export default App