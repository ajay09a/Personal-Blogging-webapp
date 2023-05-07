import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import {useNavigate} from 'react-router-dom'

const SignIn = ({setuser}) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("")
    const navigate = useNavigate();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email==="" || password===""){
            return;
        }
        signInWithEmailAndPassword(auth, email, password).then((res)=>{
            setuser(true)
          navigate("/create-post")
        })
        .catch((err)=>{
          seterror(err.message);
        })

    }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className='title'>Sign In</span>
        <form onSubmit={handleSubmit}>
            <input placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
            <input placeholder='Enter Your Password' onChange={(e)=>setpassword(e.target.value)} />
            <button>Sign In</button>
        </form>
        <span>{error}</span>
      </div>
    </div>
  )
}

export default SignIn