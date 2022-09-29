import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { yellow, blue, green, pink } from '@mui/material/colors';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function RecipeReviewCard({note, deleteNote}) {

   const {title, details, category, id} = note

   const avatarStyles = {
      bgcolor: category === 'money' ? green[500]
         : category === 'work' ? yellow[600]
         : category === 'todos' ? pink[500]
         : blue[300]
   }

   const avatarContent = category === 'money' ? 'M'
      : category === 'work' ? 'W'
      : category === 'todos' ? 'T'
      : 'R'

   return (

      <Card sx={{ maxWidth: 275, minWidth: 200 }}>
         <CardHeader
            avatar={
               <Avatar sx={avatarStyles} aria-label="recipe">
                  {avatarContent}
               </Avatar>
            }
            action={
               <IconButton aria-label="settings" onClick={() => deleteNote(id)}>
                  <DeleteOutlineOutlinedIcon />
               </IconButton>
            }
            title={title}
            subheader={category}
         />
         <CardContent>
            <Typography variant="body2" color="text.secondary">
               {details}
            </Typography>
         </CardContent>
      </Card>
   )
}
