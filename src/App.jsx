import Homepages from './pages/Homepages'
import Coursepages from './pages/Coursepages'
import Aboutpages from './pages/Aboutpages'
import Contactpages from './pages/Contactpages'
import Loginpages from './pages/Loginpages'
import './App.css'
import { Route, Routes } from 'react-router'

function App() {
 

  return (
   <>
   <Routes>
    <Route path='/' element={<Homepages />} />
    <Route path='/course' element={<Coursepages />} />
    <Route path='/about' element={<Aboutpages />} />
    <Route path='/contact' element={<Contactpages />} />
    <Route path='/login' element={<Loginpages />} />
   </Routes>
   </> 
  )
}

export default App
