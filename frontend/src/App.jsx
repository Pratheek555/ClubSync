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
import Interests from './components/ui/Interests'
import Clubs from './pages/Clubs'
import Home from './pages/Home'
import ClubPages from './components/ui/ClubPages'
import Signin from "./pages/Signin";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>

        <Route path="/club-creation" element={<ClubCreation />}></Route>
        <Route path="/interests" element={<Interests />}></Route>
        <Route path='/Clubs-Chapters' element={<Clubs />}> </Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/club/:id' element={<ClubPages />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
