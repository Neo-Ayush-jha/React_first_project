import React from 'react';

import App from '../App.css';
import Box from '@mui/material/Box';

// import {  CardActionArea, CardActions,CardMedia,Typography,CardContent,Card } from '@mui/material';
import {  Typography} from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
const CardBody = (props)=>{
   return(
    // <>
    //   <Box className='cards'>
    //       <Box className='card'>
    //         <img src={"/img/"+props.image} height='200px' alt="myPic" className='card_img' />
    //           <Typography variant='body1' className='card_title'>{props.card_title}</Typography><hr />
    //         <Typography className='card_category' variant='inherit'>{props.card_category}</Typography>
    //       </Box>
    //   </Box>
    // </>
     <>
      <Box className='box_card'>
       <Card sx={{ maxWidth: 180 }} className='cards'>
     <CardActionArea className='card'>
       <CardMedia
         component="img"
        //  height="140"
         image={"/img/"+props.image}
         alt="green iguana" className='card_img'
       />
       <CardContent>
         <Typography gutterBottom variant="body1" component="div" className='card_title'>
         {props.card_title}
         </Typography><hr />
         <Typography variant="inherit" color="text.secondary" className='card_category'>
         {props.card_category}
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
     </Box>
     </>
   )
}
export default CardBody;