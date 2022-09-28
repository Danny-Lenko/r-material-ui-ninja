import { useEffect, useState } from "react"
import { Box, Container } from "@mui/system"
import Masonry from "react-masonry-css"

const Notes = ({data}) => {

   console.log(data)

   return (
      <Container maxWidth='lg'>
         <Box mx={3} my={4}>
            <h2>Hello Notes</h2>
            <Masonry
               breakpointCols={3}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column">
               {/* array of JSX items */}
            </Masonry>
         </Box>
      </Container>
      
   )
}

export default Notes