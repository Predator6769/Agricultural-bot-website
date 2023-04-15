// import logo from './logo.svg';
import '../App.css';
import fb from '../fbconfig';
import { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database";
import { Box, Typography } from '@mui/material';

function Home() {
    const [imdata, setimdata] = useState({ 'imageURL': '' })
    useEffect(() => {
        const starCountRef = ref(fb, '/Veg_Condition');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            setimdata(data)
        });

    }, []);


    return (
        <Box sx={{width:'100vw',height:'80vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            {(imdata.imageURL === '') ? (<></>) : (
                <>
                    <Typography sx={{fontSize:'1.2vw',fontWeight:'bold',pb:3}}>Recently encountered Vegetable : </Typography>
                    <img src={imdata.imageURL} alt="veg img" width='30%'/>
                    <Typography sx={{fontSize:'1.8vw',fontWeight:'bold',pt:3}}>Recognised Condition : {imdata.recognisedCondition}</Typography>
                </>
            )}
        </Box>
    );
}

export default Home;
