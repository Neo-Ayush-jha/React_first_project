import React from 'react';

import App from '../App.css';
import Box from '@mui/material/Box';

// import {  CardActionArea, CardActions,CardMedia,Typography,CardContent,Card } from '@mui/material';
import {  Typography} from '@mui/material';

const Placement = (props)=>{
   return(
    <>
      <Box className='placement_cards'>
          <Box className='placement_card'>
            <img src={props.image}  alt="myPic" className='placement_card_img' />
              <Typography variant='h6' className='placement_card_title'>{props.card_category}</Typography><hr />
            <Typography className='placement_card_category' variant='overline'>{props.card_title}</Typography>
          </Box>
      </Box>
    </>
   )
}
export default Placement;