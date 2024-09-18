import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Donat } from './pages/Donat'
import { Home } from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donat' element={<Donat />} />
      </Routes>
    </div>
  )
}

export default App
