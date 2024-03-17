import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Errorpages from './components/Errorpages'
import Home from './components/Home'


function App() {


  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='error' element={ <Errorpages/>} />
      </Routes>
      </Router>
      
  </div>
  )
}

export default App
