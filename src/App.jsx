import Homepages from './pages/Homepages'
import Coursepages from './pages/Coursepages'
import './App.css'
import { Route, Routes } from 'react-router'

function App() {
 

  return (
   <>
   <Routes>
    <Route path='/' element={<Homepages />} />
    <Route path='/course' element={<Coursepages />} />
   </Routes>
   </> 
  )
}

export default App
