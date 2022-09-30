import { Box, Container } from "@mui/system"
import Masonry from "react-masonry-css"
import OneNote from "../components/OneNote"

const Notes = ({notes, deleteNote}) => {

   const breakpoints = {
      default: 3,
      1100: 2,
      700: 1
    };

   return (
      <Container maxWidth='lg'>
         <Box mx={3} my={4} >
            <Masonry
               breakpointCols={breakpoints}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column">
               { notes.map(note => <div key={note.id}>
                  <OneNote note={note} deleteNote={deleteNote} />
               </div>) }
            </Masonry>
         </Box>
      </Container>
   )
}

export default Notes