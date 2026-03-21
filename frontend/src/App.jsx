import React from 'react'
import { Route,Routes } from 'react-router'
import Homepage from './pages/Homepage'
import CreateNotesPage from './pages/CreateNotesPage'
import NotesDetailsPage from './pages/NotesDetailsPage'
import Navbar from './components/Navbar'
import RateLimitingWarning from './components/RateLimitingWarning'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/create' element={<CreateNotesPage/>}/>
        <Route path='/note/:id' element={<NotesDetailsPage/>}/>
        <Route path='/ratelimiting' element={<RateLimitingWarning/>}/>
      </Routes>
    </div>
  )
}

export default App