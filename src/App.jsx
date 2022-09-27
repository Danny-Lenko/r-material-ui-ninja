import { Box } from "@mui/material"
import { Outlet, Link } from "react-router-dom"
import ResponsiveAppBar from "./Navbar"
import PermanentDrawerLeft from "./PermanentDrawerLeft"

function App() {

  const drawerWidth = '240px'
  // const appbarWidth = `calc(100% - ${drawerWidth}px)`

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <PermanentDrawerLeft drawerWidth={drawerWidth} />
        <ResponsiveAppBar drawerWidth={drawerWidth} />
      </Box>

      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default App
