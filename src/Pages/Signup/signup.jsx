import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let signupFunction = async (e) => {
        e.preventDefault()
        try {
            console.log(name, password)
            const signupUser =  await createUserWithEmailAndPassword(auth, email, password)

            const saveUser = await setDoc(doc(db, 'users', signupUser.user.uid), {
                email,
                password
            })

            alert('Signup successful')
        } catch (error) {
            alert(error.message)
        }
    }
  return (
    <form onSubmit={signupFunction}>
        <input type="text" className='border border-blue-950' onChange={e => setEmail(e.target.value)} />
        <input type="text" className='border border-blue-950' onChange={e => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Signup
