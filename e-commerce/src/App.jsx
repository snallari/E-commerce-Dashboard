
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import MainDashboard from './components/MainDashboard'
import IceCream from './features/icecream/IceCream'
import Cake from './features/cake/Cake'
import Users  from './features/users/Users'
import Login from './components/Login'
import Authenticate from './components/Authenticate'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={
        <Authenticate>
          <MainDashboard />
        </Authenticate>
      }/>
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
