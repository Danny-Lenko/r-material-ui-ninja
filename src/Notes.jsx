import { Box, Container } from "@mui/system"
import Masonry from "react-masonry-css"
import OneNote from "./OneNote"

const Notes = ({notes, deleteNote}) => {

   return (
      <Container maxWidth='lg'>
         <Box mx={3} my={4} >
            <h2>Hello Notes</h2>
            <Box sx={{border: '1px solid black', height: '30px'}}></Box>

            <Masonry
               breakpointCols={3}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column">
               {
                  notes.map(note => <OneNote key={note.id} note={note} deleteNote={deleteNote} />)
               }
            </Masonry>
         
         </Box>
      </Container>
   )
}

export default Notes