
import Burger from './components/Burger.jsx'
import SignUp from './components/SignUp.jsx'
import { Routes, Route } from 'react-router-dom'

const Routers = () => (
  <Routes>
    <Route exact path='/' element={<Burger />} />
    <Route path='/signup' element={<SignUp />} />
  </Routes>
)

export default Routers
