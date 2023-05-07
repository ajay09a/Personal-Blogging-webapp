import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import {useNavigate} from 'react-router-dom'

const LogOut = ({user}) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/")
    }, [])
    
    const handleLogOut= ()=>{
        signOut(auth).then((res)=>{
            console.log("sign out")
            
        })
        .catch((err)=>{
            console.log("Error", err)
        })
    }
  return (
    <div>
        {user?handleLogOut():null}
    </div>
  )
}

export default LogOut