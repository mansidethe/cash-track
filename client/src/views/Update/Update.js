import react, { useEffect, useState } from 'react'
import './Update.css';
import axios from "axios";
import Navbar from "./../../components/Navbar/Navbar";
import showToast from 'crunchy-toast';
import { useParams } from 'react-router-dom';


function UpdateTransaction() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const { id } = useParams();

  const fetchTrans = async () => {
    const response = await axios.get(`/api/transaction/${id}`)
    const { amount, type, description, category } = response.data.data;

    setAmount(amount)
    setType(type)
    setDescription(description)
    setCategory(category)
  }
  useEffect(() => {
    fetchTrans()
  }, [])

  const UpdateTransaction = async () => {
    const response = await axios.put(`/api/transaction/${id}`, {
      amount,
      type,
      description,
      category
    })

    if (response?.data?.data) {
      const successMessage = 'Transaction updated successfully';
      showToast(successMessage, 'success', '3000');
      window.location.href = '/'
    }

    setAmount('')
    setCategory('')
    setDescription('')
    setType('')

  }

  return (
    <div>
         <Navbar/>
        <div>
           
<form className='add-transaction-card form-control'>
<div className='text-center'>
<span className='trans-text'>Update Transaction</span>
</div>
<div>
<input
 type='number'
 placeholder='Enter amount'
className='form-control-regi all-font-size'
 value={amount}
 onChange={(e) => {
 setAmount(e.target.value)
  }}
/>
</div>

<label className='cetgory-text '>Category :</label>
<div className='select-label'>
<select
 className='form-control-regi all-font-size'
value={category}
 onChange={(e) => {
setCategory(e.target.value)
 }}>
<option >select category</option>
<option value="food">Food</option>
<option value="entertainement">Entertainment</option>
<option value="shopping">Shopping</option>
<option value="rent">Rent</option>
<option value="travel">Travel</option>
<option value="education">Education</option>
<option value="salary">Salary</option>
<option value="freelancing">Freelancing</option>
<option value="side-hussle">Side-hussle</option>
<option value="other">Other</option>
</select>
</div>

<label className='all-font-size'>Type : </label>
<div>
<input
type='radio'
className='gender-type'
name="amounttype"
value="debit"
checked={type === "debit"}
onChange={(e) => {
if (e.target.checked) {
setType(e.target.value)
 }
}}
/><label className='type-text'>Debit</label>

</div>

<div>
<input
type='radio'
className='gender-type'
value="credit"
checked={type === "credit"}
onChange={(e) => {
if (e.target.checked) {
setType(e.target.value)
}
}}
/> <label className='type-text all-font-size'>Credit</label><br /><br />
</div>

<div>
<input
type='text'
placeholder='enter description'
className='form-control-regi all-font-size'
value={description}
onChange={(e) => {
setDescription(e.target.value)
 }}
/>
</div>

<div><button
type='button'
 className='btn btn-addTransaction'
onClick={UpdateTransaction}>Update</button></div>
</form>
        </div>
    </div>
)
}
export default UpdateTransaction;