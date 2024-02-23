import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import LoginSidePage from './sideLoginPage.png';
import './App.css'

function Signup () {
const [Name , setName] = useState()
const [ID , setID] = useState()
const [Country , setCountry] = useState()
const [Email , setEmail] = useState()
const [phone , setphone] = useState()
const [City , setCity] = useState()
const [Depart , setDepart] = useState()
const Navigate = useNavigate();
const submitData = (e) =>{
e.preventDefault()
axios.post('http://localhost:3001/register' , { Name , ID , Country , Email , phone , City , Depart })
.then(result => console.log(result))
Navigate('/Login')
.catch(err => console.log(err));
}

    return (
        <>
      <img className='imgside' src={LoginSidePage} alt="Side Login Page" />
    <div className='Containner'>
        <form onSubmit={submitData}>
        <h1>Register Yourself Here!</h1>
        <label htmlFor="Name">Employee Name: &nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text"  name="Name" onChange={(e) => setName(e.target.value)}/><br></br>
        <label htmlFor="ID">&nbsp;Employee ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text"  name="ID" onChange={(e) => setID(e.target.value)}/><br></br>
        <label htmlFor="Country">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text"  name="Country" onChange={(e) => setCountry(e.target.value)}/><br></br>
        <label htmlFor="Email">Email Address: &nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text"  name="Name" onChange={(e) => setEmail(e.target.value)}/><br></br>
        <label htmlFor="phone">phone Number:&nbsp;&nbsp;&nbsp; </label>
        <input type="text"  name="phone" onChange={(e) => setphone(e.target.value)}/><br></br>
        <label htmlFor="City">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="text"  name="City" onChange={(e) => setCity(e.target.value)}/><br></br>
        <label htmlFor="Depart">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Depart:&nbsp;&nbsp;&nbsp; </label>
        <input type="text"  name="Depart" onChange={(e) => setDepart(e.target.value)}/><br></br>
       <br></br>
       <button type="submit" className='RegisterBtn'>Register</button>
       <Link to ="/Login" className='loginLink' >Login</Link>
</form>
    </div> 
     </>
  )
}

export default Signup