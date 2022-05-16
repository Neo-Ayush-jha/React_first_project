import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import '../App.css';

 const Nav = () => {
  return (
    <>
         <AppBar className='navBar' >
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>Code with SadiQ</Typography>
          <Button  variant="caption">Home</Button>
          <Button color='inherit'> Course</Button>
          <Button color='inherit'>Online Payment</Button>
          <Button color='error' variant="contained">Applyfor Admission</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Nav;