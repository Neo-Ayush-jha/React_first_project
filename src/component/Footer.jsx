import React from 'react';

import App from '../App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// import {  CardActionArea, CardActions,CardMedia,Typography,CardContent,Card } from '@mui/material';

const Footer = (props)=>{
   return(
    <>
        <Box  className='footer'>
        <Box  className='code'><Typography variant='h3'>CodeWithSadiQ.</Typography ></Box>
        <Box className='list'>
        <ul >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
          <li>Workshop</li>
          <li>Hide</li>
        </ul>
        </Box>
        </Box>
    </>
   )
}
export default Footer;