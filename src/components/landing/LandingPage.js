import React from 'react'
import { Typography, Box } from '@material-ui/core'
import LandingPageStyle from './LandingPageStyle'
import { Fade } from 'react-reveal'

const LandingPage = () => {

    const classes = LandingPageStyle()

    return (
        <>
        <Fade left>
            <Box component={Typography} 
            className={classes.mainBox}
            display='flex'
            flexDirection='column'
            >
                <Typography variant='h2' className={classes.Name}>Marwel Mancilla</Typography>
                <Typography variant='h3' className={classes.Position}>{'<React Developer/>'}</Typography>       
            </Box>
        </Fade>    
            
        </>
    )
}

export default LandingPage
