import React from 'react';

import Box from '@mui/material/Box';
import CardBody from './CardBody';
import Placement from './Placement';
import Footer from './Footer';
import CardItem from './CardItem';
import App from '../App.css';
import Typography from '@mui/material/Typography';
import PlacementItem from './PlacementItem';

function ncard(val){
    return (
        <CardBody
                image={val.image}
                card_title={val.card_title}
                card_category={val.card_category}
            />
    );
}
function pcard(val){
    return (
        <Placement
                image={val.image}
                card_title={val.card_title}
                card_category={val.card_category}
            />
    );
}
const Home = ()=>{
   return(
    <>
        <Box className='box1'>
            <p className='cat' >Skill Hai! To Future Hai!</p>
            <Typography variant='subtitle1' className='catdiscription'>"CWS is an on-demand marketplace for top Programming engineers, developers, consultants, architects, programmers, and tutors. Get your projects built by vetted web programming freelancers or learn from expert mentors with team training & coaching experiences in Project based training."</Typography>
        </Box>
        <Typography variant='h5' className='ourCourse'  px={10}>Our Courses</Typography>
           <Box>
           {CardItem.map(ncard)}
           </Box>
            <Box>
           <Typography variant='h5' className='place'  px={10}> Students Achievements</Typography>
                {PlacementItem.map(pcard)}
            </Box>
           <Box>
           <Footer/>
           </Box>
    </>
            
   )
}
export default Home;