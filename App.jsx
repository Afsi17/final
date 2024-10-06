import { useState } from 'react'
import './App.css'
import Appbar from './components/Appbar'
import { Route, Routes } from 'react-router-dom'
import Api from './components/Api'
import Form from './components/Form'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Appbar />
      <Routes>
        <Route path='/add' element={<Form></Form>} />
        <Route path='/ap' element={<Api></Api>} />
      </Routes>
    </>
  )
}

export default App
