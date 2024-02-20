
import { useEffect, useState } from 'react';
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AuthContext from './contexts/auth';


// eslint-disable-next-line react/prop-types


function App() {
  return (
      <div>
       <Route path='*' element={<Home />}/>
      </div>
  );
}

export default App
