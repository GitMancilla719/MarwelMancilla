import React,{ useState, useEffect } from 'react'
import { Tabs, Tab, Box } from '@material-ui/core'
import LandingPage from './components/landing/LandingPage'
import About from './components/about/About'
import Works from './components/works/Works'

import Particles from 'react-particles-js'

import AppStyle from './AppStyle'
import openTag from './assets/openTag.png'
import closeTag from './assets/closeTag.png'

function App() {

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue) 
  }
  useEffect( ()=>{
    window.onscroll = () => scrollNum()
  },[])

  const scrollNum = () => {
    if(document.documentElement.scrollTop > 900){
      setValue(2)
    }
    else if(document.documentElement.scrollTop > 600){
      setValue(1)
    }
    else{
      setValue(0)
    }
  }

  const myParams = {
    "particles": {
        "number": {
            "value": 35,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "width": 0.2,
        },
        "move": {
            "speed": 0.7,
            "out_mode": "bounce"
            
        },
        "shape": {
            "type": [
                "image"
            ],
            "image": [
                {
                    "src": openTag,
                    "height": 'auto',
                    "width": 5
                },
                {
                    "src": closeTag,
                    "height": 'auto',
                    "width": 5
                }
            ]
        },
        "size": {
            "value": 7,
            "random": false,
        },
        "opacity": {
          "anim": {
              "enable": true,
              "speed": 0.1,
          }
      }
    },
}
  
  const classes = AppStyle()
  return (
    <>   
      
        <Particles
          style={{position : 'fixed', width : '100%', height : '100%', zIndex : '-1'}}
          params={myParams} />

        <Box className={classes.tabsStyle} display='flex' justifyContent='flex-end'>
          <Tabs  value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'#FFF123'}}}>
            <Tab label="Home" {...value} onClick={ ()=> document.getElementById("home").scrollIntoView()}/>
            <Tab label="About" {...value} onClick={ ()=> document.getElementById("about").scrollIntoView()}/>
            <Tab label="Works" {...value} onClick={ ()=> document.getElementById("works").scrollIntoView()}/>
          </Tabs> 
        </Box>


        <Box id='home'>
          <LandingPage/>
        </Box>

        <Box id='about'>
          <About/>
        </Box>

        <Box id='works'>
          <Works/>
        </Box> 

    </>
  )
}

export default App;
