import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import showToast from 'crunchy-toast';

function App() {

const [transactions, setTransactions] = useState([]);
const [creditSum, setCreditSum] = useState (0);
const [debitSum, setDebitSum] = useState (0);
const [user, setUser] = useState({});

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
  const getUser = JSON.parse(localStorage.getItem('user') || '{}');
  const storageUser = getUser._id;
  console.log(storageUser)

const response = await axios.get(`/api/transaction/user/${storageUser}`);
const transactionsData = response?.data?.data;

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

const deleteUserTransaction = async(id)=>{
  const response = await axios.delete(`/api/transaction/${id}`);

  if(response?.data?.success){
    showToast(response?.data?.message,'success','3000');
    loadTransactions();
  }
}
const Update = async(id)=>{
  window.location.href=`/update/${id}`
}

useEffect(()=>{
  const userstorageData = JSON.parse(localStorage.getItem('user') || '{}');
  
  if(userstorageData?.email){
    setUser(userstorageData);
  }
  else{
    showToast('you are not logged in!', 'danger',1000);
    window.location.href='/login'
  }

},[])

  return (<>
  <Navbar/>
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
    </>
  )
}

export default App