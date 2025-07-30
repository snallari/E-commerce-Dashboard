
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainDashboard from './components/MainDashboard'
import IceCream from './features/icecream/IceCream'
import Cake from './features/cake/Cake'
import Users  from './features/users/Users'
import Authenticate from './components/Authenticate'
import Login from './components/Login'
import ErrorBoundary from './components/ErrorHandling/ErrorBoundary'
import { Suspense } from 'react'
import React from 'react'
import Details from './components/Details'
import DetailsProvider from './components/DetailsProvider'
import Loading from './components/Loading'

// Create lazy-loaded component outside of render
const LazyLogin = React.lazy(() => import('./components/Login'))
const LazyMainDashboard=React.lazy(()=>import('./components/MainDashboard'))

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <LazyLogin />
          </Suspense>
        </ErrorBoundary>
      } />
      <Route path="/main" element={
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <LazyMainDashboard />
          </Suspense>
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

      <Route path="/details" element={
        <Authenticate>
        <DetailsProvider>
          <Details />
        </DetailsProvider>
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
