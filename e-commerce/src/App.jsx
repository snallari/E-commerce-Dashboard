
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainDashboard from './components/MainDashboard'
import IceCream from './features/icecream/IceCream'
import Cake from './features/cake/Cake'
import Users  from './features/users/Users'
import Authenticate from './components/Authenticate'
import Login from './components/Login'
import ErrorBoundary from './components/ErrorHandling/ErrorBoundary'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={
        <ErrorBoundary>
          <Login />
        </ErrorBoundary>
      } />
      <Route path="/main" element={
      <ErrorBoundary>
        <Authenticate>
          <MainDashboard />
        </Authenticate>
      </ErrorBoundary>
      } />
      <Route path="/icecream" element={
        <Authenticate>
          <IceCream />
        </Authenticate>
      } />
      <Route path="/cake" element={
        <Authenticate>
          <Cake />
        </Authenticate>
      } />
      <Route path="/users" element={
        <Authenticate>
          <Users />
        </Authenticate>
      } />

    </Routes>
    </BrowserRouter>
    // <div>
    //   {/* <Cake />
    //   <IceCream />
    //   <Users/> */}
    //   <MainDashboard/>
    // </div>
  )
}

export default App
