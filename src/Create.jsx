import { Container } from "@mui/system"
import { Typography, Box } from "@mui/material"

const Create = () => {
   return (
      <Container maxWidth='lg'>
         <Box mx={3}>
            <Typography variant="h6">Create a New Note</Typography>
         </Box>
      </Container>  
   )
}

export default Create