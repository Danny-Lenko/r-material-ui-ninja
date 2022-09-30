import { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import ResponsiveAppBar from "./components/Navbar"
import PermanentDrawerLeft from "./components/PermanentDrawerLeft"
import Notes from "./pages/Notes"
import Create from "./pages/Create"
import Data from './data/db.json'

function App() {
  const [notes, setNotes] = useState([...Data.notes])

  function addNewNote(note) {
    setNotes([...notes, note])
  }

  function deleteNote(noteId) {
    setNotes(prevState => prevState.filter(note => note.id !== noteId))
  }

  const drawerWidth = '240px'

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <PermanentDrawerLeft drawerWidth={drawerWidth} />
        <ResponsiveAppBar drawerWidth={drawerWidth} />
      </Box>
    
      <Box id="detail" sx={{ml:drawerWidth}}>
        <Routes>
          <Route path='/' element={<Notes notes={notes} deleteNote={deleteNote} />} />
          <Route path='/create' element={<Create addNewNote={addNewNote} />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
