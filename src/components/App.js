import ResetStyle from '../assets/styles/ResetStyles'
import GlobalStyle from '../assets/styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'

export default function App() {
  return (
    <>
    <ResetStyle />
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
