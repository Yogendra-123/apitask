import React from "react"
import Home from "./components/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Next from "./components/Next"
import NextPage from "./components/NextPage"
import './App.css'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/next" element={<Next/>}/>
    <Route path="/nextpage" element={<NextPage/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}
export default App