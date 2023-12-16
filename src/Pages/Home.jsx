import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { db } from './firebase';

const Home = () => {
    useEffect(() => {
        getUser()
    }, [])
    async function getUser() {
        let tempArr = [];
        const unsub = onSnapshot(collection(db, 'users'), doc => {
            tempArr = []
            doc.forEach(data => {
                tempArr.push({ ...data.data(), id: data.id })
            })
            console.log(tempArr.sort((a, b) =>  a-b));
        })
    }
    return (
        <div>
            HomePage
        </div>
    )
}

export default Home
