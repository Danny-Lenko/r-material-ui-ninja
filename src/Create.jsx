import { useState } from "react";
import { Container } from "@mui/system"
import { Typography, Box, TextField, Button } from "@mui/material"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Create = ({addNewNote}) => {
   const [title, setTitle] = useState('')
   const [details, setDetails] = useState('')
   const [category, setCategory] = useState('money')

   const handleTitleChange = (e) => {
      setTitle(e.target.value)
   }

   const handleDetailsChange = (e) => {
      setDetails(e.target.value)
   }

   const handleCategoryChange = (e) => {
      setCategory(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      addNewNote({title, details, category, id: new Date()})
   }

   const textfieldStyle = {
      mb: 3,
      "& label.Mui-focused": {
        color: 'secondary.light'
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: 'secondary.light'
        }
      }
   }

   const radioStyle = {
      '&.Mui-checked': {
         color: 'secondary.light',
      },
      '&': {
         color: 'grey.500'
      }
   }

   const buttonStyle = {
      backgroundColor: 'secondary.light', 
      "&:hover": {
         backgroundColor: 'secondary.main'
      }
   }

   return (
      <Container maxWidth='lg'>
         <Box mx={3} my={4}>
            <Typography mb={3} variant='h6' color='grey.600' fontWeight='600'>Create a New Note</Typography>

            <Box component='form' onSubmit={handleSubmit}>
               <TextField
                  sx={textfieldStyle}
                  fullWidth 
                  required 
                  id="outlined-basic" 
                  label="Note Title" 
                  variant="outlined"
                  value={title}
                  onChange={handleTitleChange}
               />
               <TextField
                  sx={textfieldStyle}
                  fullWidth 
                  required 
                  id="outlined-basic" 
                  label="Details" 
                  variant="outlined"
                  multiline
                  rows={4}
                  value={details}
                  onChange={handleDetailsChange}
               />
               <FormControl sx={{mb:3}}>
                  <FormLabel id="demo-radio-buttons-group-label">Note Category</FormLabel>
                  <RadioGroup
                     aria-labelledby="demo-radio-buttons-group-label"
                     defaultValue="money"
                     name="radio-buttons-group"
                     onChange={handleCategoryChange}
                  >
                     <FormControlLabel value="money" control={<Radio sx={radioStyle} />} label="Money" />
                     <FormControlLabel value="todos" control={<Radio sx={radioStyle} />} label="Todos" />
                     <FormControlLabel value="reminders" control={<Radio sx={radioStyle} />} label="Reminders" />
                     <FormControlLabel value="word" control={<Radio sx={radioStyle} />} label="Work" />
                  </RadioGroup>
               </FormControl>
               <br />
               <Button sx={buttonStyle} variant="contained" endIcon={<ChevronRightOutlinedIcon />} type="submit">
                  Submit
               </Button>
            </Box>
         </Box>
      </Container>
   )
}

export default Create