import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const loginUser = async (e) => {
        e.preventDefault()
        try {
            const userLogin = await signInWithEmailAndPassword(auth, email, password)
            alert('user login successful')
            navigate('/home')
        } catch (error) {
            alert(error.message)
        }
    }
  return (
    <form onSubmit={loginUser}>
        <input type="text" placeholder='email' onChange={e=> setEmail(e.target.value)} />
        <input type="text" placeholder='password' onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
  )
}

export default Login
