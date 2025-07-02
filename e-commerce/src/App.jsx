
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainDashboard from './components/MainDashboard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainDashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
