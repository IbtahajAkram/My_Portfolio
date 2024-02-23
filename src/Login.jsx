import  { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";



function Login() {
    const [ID, setID] = useState("")
    const [Email, setEmail] = useState("")
    const NagivateToHone = useNavigate();
    const LoginnCheck = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/LoginnCheck', { ID, Email })
            .then(result => {
                console.log(result)
                if (result.data === "success") {
                    NagivateToHone('/HomePage')
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <>
      
            <div className="LogForm">
                <form onSubmit={LoginnCheck}>
<label htmlFor="ID">ID Number</label>
<input type="text" name="ID" onChange={(e) => setID(e.target.value)} /><br/>
<label htmlFor="Email">Email Address</label>
<input type="email" name="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
<button type="submit" className="LoginBtn">Login</button>
<Link to="/Signup">Signup</Link>
</form>
            </div>

            
        </>
    )
}

export default Login

