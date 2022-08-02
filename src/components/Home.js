import styled from 'styled-components'
import logo from '../assets/images/logo-trackit.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <HomePage>
      <img src={logo} />
      <Inputs>
        <input placeholder="email" type="text" />
        <input placeholder="senha" type="text" />
      </Inputs>
      <Button>
        <p>Entrar</p>
      </Button>
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
    margin-top: 68px;
  }
`

const Registration = styled.p`
  font-family: 'Lexend Deca', sans-serif;
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
  width: 308px;
  height: 45px;
  background: #52b6ff;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;

  p {
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    color: #ffffff;
  }
`
