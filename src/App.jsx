import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import './App.css'

function App() {

  return (
    <>
     <Router>
      <Routes>

        <Route path="/" element={<Home/>}> </Route>

        <Route path="/login" element={<Login/>}> </Route>

      </Routes>
     </Router>
    </>
  )
}

export default App
