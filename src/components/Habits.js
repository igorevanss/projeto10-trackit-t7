import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'

export default function Habits() {
  const [habits, setHabits] = useState([])
  const tokenSerial = localStorage.getItem('token')
  const token = JSON.parse(tokenSerial)
  const config = { headers: { authorization: `Bearer ${token}` } }

  useEffect(() => {
    console.log(config)
    const promise = axios.get(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
      config
    )

    promise.then(res => {
      setHabits(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <>
      <Header />
      <h1>Tela hábitos</h1>
      <Footer />
    </>
  )
}
