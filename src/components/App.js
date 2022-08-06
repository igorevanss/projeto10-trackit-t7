import ResetStyle from '../assets/styles/ResetStyles'
import GlobalStyle from '../assets/styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'
import Habits from './Habits'
import UserContext from './ContextAPI'
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState([]);

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <UserContext.Provider value={{token, setToken}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Registration />} />
            <Route path="/hoje" element={<Habits />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}
