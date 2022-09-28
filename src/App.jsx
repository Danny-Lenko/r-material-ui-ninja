import { Box } from "@mui/material"
import { Outlet, Link } from "react-router-dom"
import ResponsiveAppBar from "./Navbar"
import PermanentDrawerLeft from "./PermanentDrawerLeft"


function App() {
  const drawerWidth = '240px'

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <PermanentDrawerLeft drawerWidth={drawerWidth} />
        <ResponsiveAppBar drawerWidth={drawerWidth} />
      </Box>

      <Box id="detail" sx={{ml:drawerWidth}}>
        <Outlet />
      </Box>
    </>
  )
}

export default App
