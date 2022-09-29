import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Link, useNavigate } from 'react-router-dom';

export default function PermanentDrawerLeft({drawerWidth}) {
   const navigate = useNavigate()
   const links = [
      {text:'My Notes', icon: <NotesOutlinedIcon />, address: '/'}, 
      {text:'Create Note', icon: <AddCircleOutlineOutlinedIcon />, address: '/create'}
   ]

   function navigateToPage(page) {
      navigate(page)
   }

  return (
   <Drawer
      sx={{
         width: drawerWidth,
         flexShrink: 0,
         '& .MuiDrawer-paper': {
         width: drawerWidth,
         boxSizing: 'border-box',
         },
      }}
      variant="permanent"
      anchor="left"
   >
      <Toolbar>
         <Typography variant="h5" fontFamily='Quicksand' fontWeight='500'>Ninja Notes</Typography>
      </Toolbar>
      <List sx={{pt:0}}>
         {links.map(link => (
            <ListItem key={link.text} disablePadding>
               <ListItemButton onClick={() => navigateToPage(link.address)}>
                  <ListItemIcon sx={{color: 'secondary.light'}}>
                     {link.icon}
                  </ListItemIcon>
                  <ListItemText primary={link.text} />
               </ListItemButton>
            </ListItem>
         ))}
      </List>
   </Drawer>
  );
}