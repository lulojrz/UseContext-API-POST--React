import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Blog from './components/blog'
import './App.css'
import Header from './components/header'

function App() {

  return (
    <>
      <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path = "/blog" element = {<Blog />} />
      </Routes>
      <Header></Header>
    </>
  )
}

export default App
