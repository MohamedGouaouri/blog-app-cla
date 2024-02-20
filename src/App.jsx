
import { useEffect, useState } from 'react';
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AuthContext from './contexts/auth';


// eslint-disable-next-line react/prop-types


function App() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log(isLoggedIn)
  const login = () => {
    setIsLoggedIn(true)
    navigate('/')
  }

  const logout = () => {
    setIsLoggedIn(false)
  }
  useEffect(() => {
    console.log('Updated')
  })
  return (
      <div>
        <AuthContext.Provider value={isLoggedIn}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path='*' element={<Home />}/>
            </Route>
            <Route path='/login' element={<Login login={login}/>}/>
          </Routes>
        </AuthContext.Provider>
      </div>
  );
}

export default App
