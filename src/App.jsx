import { Routes, Route } from 'react-router-dom'

import { useState } from 'react'
import MainLayout from './Layouts/MainLayout'
import "antd/dist/reset.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route path='Home'element={<Home></Home>} ></Route>
          <Route path='About'element={<About></About>} ></Route>
          <Route path='Community'element={<Community></Community>} ></Route>
        </Route>
      </Routes>
    </>
  )
}

function Home(){
  return(
    <>
      <h2>Home</h2>
    </>
  )
}

function About(){
  return(
    <>
      <h2>About</h2>
    </>
  )
}

function Community(){
  return(
    <>
      <h2>Community</h2>
    </>
  )
}


export default App


