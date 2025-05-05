import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'

function App() {

  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
           <Route path='/' element={<h1>List</h1>} />
           <Route path='/character/:id' element={<h1>Caracter</h1>}  />
        </Routes>
      </div>

    </>
  )
}

export default App
