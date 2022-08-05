import styled from 'styled-components'
import logo from '../assets/images/logo-trackit.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Registration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [photo, setPhoto] = useState('')

  function register() {
    const body = {
      email: email,
      name: userName,
      image: photo,
      password: password
    }
    const promisse = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
      body
    )
    promisse
      .then(res => {
        alert('cadastro relizado')
      })
      .catch(err => {
        alert('erro, tente novamente')
      })
  }

  return (
    <Registrate>
      <img src={logo} />

      <form onSubmit={register}>
        <Inputs>
          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          <input
            placeholder="senha"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />

          <input
            placeholder="nome"
            type="text"
            value={userName}
            onChange={event => setUserName(event.target.value)}
            required
          />

          <input
            placeholder="foto"
            type="url"
            value={photo}
            onChange={event => setPhoto(event.target.value)}
            required
          />
        </Inputs>

        <Button type="submit">
          <p>Cadastrar</p>
        </Button>
      </form>

      <Link to={'/'}>
        <Home>Já tem uma conta? Faça login!</Home>
      </Link>
    </Registrate>
  )
}

const Registrate = styled.div`
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
  cursor: pointer;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    color: #ffffff;
  }
`
const Home = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  text-decoration-line: underline;
  color: #52b6ff;
  margin-top: 25px;
`
