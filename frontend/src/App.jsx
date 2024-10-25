import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navibar from './common/navbar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Signup from './pages/Signup'
import ClubCreation from "./components/ui/ClubCreation"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        {/* <Route path='/Clubs&Chapters'></Route> */}
        <Route path="/Club-Creation" element={<ClubCreation />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
