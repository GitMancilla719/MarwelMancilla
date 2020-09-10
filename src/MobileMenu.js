import React from 'react'
import { Typography, Box, Card, Button, makeStyles } from '@material-ui/core'

const MobileMenuStyle = makeStyles( theme => ({
    container : {
        color : '#FFF123'
    },
    btn : {
        color : '#FFF123'
    }
})
)

const MobileMenu = () => {
    const classes = MobileMenuStyle()
    return (
        <Box className={classes.container} display='flex' flexDirection='column'>
            <Button className={classes.btn} onClick={ ()=> document.getElementById("home").scrollIntoView() }>Home</Button>
            <Button className={classes.btn} onClick={ ()=> document.getElementById("about").scrollIntoView() }>About</Button>
            <Button className={classes.btn} onClick={ ()=> document.getElementById("works").scrollIntoView() }>Works</Button>
            <Button className={classes.btn} onClick={ ()=> document.getElementById("contact").scrollIntoView() }>Contact</Button>
        </Box>
    )
}

export default MobileMenu
