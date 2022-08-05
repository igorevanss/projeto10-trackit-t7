import styled from 'styled-components'
import logo from '../assets/images/logo-trackit.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


export default function Home() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const body = {
    email: email,
    password: password,
  }

  function handleForm(event) {
    event.preventDefault()

    const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body)

    promisse
      .then(res => {
        localStorage.setItem("token", JSON.stringify(res.data.token))
        console.log(res.data)
        navigate('/hoje')
      })
      .catch(err => {
        alert('erro, tente novamente')
      })
  }

  return (
    <HomePage>
      <img src={logo} />
      <form onSubmit={handleForm}>
      <Inputs>
        <input placeholder="email" type="email" value={email} onChange={event => setEmail(event.target.value)} required />

        <input placeholder="senha" type="password" value={password} onChange={event => setPassword(event.target.value)} required />
      </Inputs>
      <Button type="submit">
        <p>Entrar</p>
      </Button>
      </form>
      <Link to={'/cadastro'}>
        <Registration>Não tem uma conta? Cadastre-se!</Registration>
      </Link>
    </HomePage>
  )
}

const HomePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 180px;
  }
`

const Registration = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  text-decoration-line: underline;
  color: #52b6ff;
  margin-top: 25px;
`

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-top: 33px;

  input {
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  input:placeholder {
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #dbdbdb;
  }
`
const Button = styled.button`
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    color: #ffffff;
  }
`
