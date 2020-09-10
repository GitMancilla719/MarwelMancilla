import React from 'react'
import { Typography, Box} from '@material-ui/core'
import AboutStyle from './AboutStyle'
import reactLogo from '../../assets/1.png'
import muiLogo from '../../assets/2.png'
import gitLogo from '../../assets/3.png'
import githubLogo from '../../assets/4.png'
import jsLogo from '../../assets/5.png'
import cssLogo from '../../assets/6.png'
import htmlLogo from '../../assets/7.png'
import psLogo from '../../assets/8.png'


const About = () => {
    const pics = [
        {tech : reactLogo, title : 'ReactJS'},
        {tech : muiLogo, title : 'Material UI'},
        {tech : gitLogo, title : 'Git'},
        {tech : githubLogo, title : 'GitHub'},
        {tech : jsLogo, title : 'JS'},
        {tech : cssLogo, title : 'CSS'},
        {tech : htmlLogo, title : 'HTML'},
        {tech : psLogo, title : 'Photoshop'}
    ]

    const classes = AboutStyle()
    return (
        <>
                <Box className={classes.container}>
                        <Typography className={classes.titles} variant='h4'>About this Guy</Typography>
                        <Typography className={classes.desc}>
                                I am a fresh graduate with a degree in BS Information Technology with a great passion for web development and technology.
                                My skills in web development are mostly from being self-taught, curiosity and a burning desire to improve and further progress in this field.
                                Although inexperienced, I have done a few personal projects to showcase of what I can currently do.      
                        </Typography>
               
                        <Typography className={classes.desc}>
                                Below are my current skills, technologies and projects made.
                        </Typography>
                    
                        <Typography className={classes.titles} variant='h4'>Skills / Technologies</Typography>
                        <Box className={classes.skillBox} mx='auto' display='flex' flexDirection='row' justifyContent='center' flexWrap='wrap'>
                        {   
                            pics.map( pic =>
                                <Box key={pic.title} className={classes.skillContainer} display='flex' flexDirection='column' alignContent='center'> 
                                    <img src={pic.tech} alt={pic.title} className={classes.skillLogo}/>
                                    <Typography className={classes.skillTitle}>{pic.title}</Typography>
                                </Box>
                            )   
                        }
                        </Box>
                </Box>
        </>
    )
}

export default About
