import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import UserContext from './ContextAPI'

export default function Habits() {
  const [habits, setHabits] = useState([])
  const config = { headers: { authorization: `Bearer ${token}` } }
  const { token, setToken } = useContext(UserContext)

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
