import React from 'react'
import { Typography, Box, Card, Button, ButtonGroup } from '@material-ui/core'
import { Fade } from 'react-reveal'
import WorksStyle from './WorksStyle'
import MMPORT from '../../assets/MMPORT.jpeg'
import viewButton from '../../assets/viewbutton.png'
import gitButton from '../../assets/gitbutton.png'

const Works = () => {
    const classes = WorksStyle()

    const scrollNum = document.documentElement.scrollTop

    return (
        <>
                <Fade left cascade when={ scrollNum>900? true : false}>
                <Box className={classes.container}>
                    <Box className={classes.titleBox}>
                        <Typography className={classes.titles} variant='h4'>Projects</Typography>
                    </Box>

                    <Box display='flex' flexDirection='row' justifyContent='center' flexWrap='wrap'>

                        <Box component={Card} elevation={2} className={classes.proj}>
                            <Box className={classes.projImg}>
                                <img src={MMPORT} alt="MMPORT" width='300em'/>
                            </Box>
                            <Box className={classes.projDesc}>
                                <Typography variant='h6'>M.Mancilla | Portfolio</Typography>
                                <Typography variant='body1'>ReactJS, Material UI</Typography>
                                <Box component={ButtonGroup} className={classes.bGroup} variant="text">
                                    <Button className={classes.buttonG}><img src={viewButton} alt="viewButton" width='30em'/> View</Button>
                                    <Button className={classes.buttonG} ><img src={gitButton} alt="gitButton" width='35em'/> GitHub</Button>
                                </Box>
                            </Box>
                        </Box>

                        <Box component={Card} elevation={2} className={classes.proj}>
                            <Box className={classes.projImg}>
                                <img src="" alt=""/>
                            </Box>
                            <Box className={classes.projDesc}>
                                <Typography variant='h6'>Project Title 2</Typography>
                                <Typography variant='body1'>ReactJS, Material UI</Typography>
                                <Box component={ButtonGroup} className={classes.bGroup} variant="text">
                                    <Button className={classes.buttonG}><img src={viewButton} alt="viewButton" width='30em'/> View</Button>
                                    <Button className={classes.buttonG}><img src={gitButton} alt="gitButton" width='35em'/> GitHub</Button>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
                </Fade>
            
        </>
    )
}

export default Works