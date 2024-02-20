
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';



// eslint-disable-next-line react/prop-types


function App() {
  return (
      <div>
       <Routes>
        <Route path='*' element={<Home />}/>
       </Routes>
      </div>
  );
}

export default App
