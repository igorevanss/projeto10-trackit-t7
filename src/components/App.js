import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
