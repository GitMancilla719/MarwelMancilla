import React,{ useState, useEffect } from 'react'
import { Tabs, Tab, Box, Button } from '@material-ui/core'
import LandingPage from './components/landing/LandingPage'
import About from './components/about/About'
import Works from './components/works/Works'
import Contact from './components/Contact'
import MobileMenu from './MobileMenu'

import { Fade } from 'react-reveal'
import Particles from 'react-particles-js'
import AppStyle from './AppStyle'
import openTag from './assets/openTag.png'
import closeTag from './assets/closeTag.png'
import portLogo from './assets/portLogo.png'


function App() {

  const [disp, setDisp] = useState(false)
  useEffect( ()=>{
    window.onscroll = () => scrollNum()
  },[])

  const scrollNum = () => {
    document.documentElement.scrollTop > 1900?  
    document.getElementById("btnIDContact").classList.add(classes.btnScroll)
    : document.getElementById("btnIDContact").classList.remove(classes.btnScroll)

    document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 1900?  
    document.getElementById("btnIDWorks").classList.add(classes.btnScroll)
    : document.getElementById("btnIDWorks").classList.remove(classes.btnScroll)

    document.documentElement.scrollTop > 650 && document.documentElement.scrollTop < 1200?  
    document.getElementById("btnIDAbout").classList.add(classes.btnScroll)
    : document.getElementById("btnIDAbout").classList.remove(classes.btnScroll)

    document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 650?  
    document.getElementById("btnIDHome").classList.add(classes.btnScroll)
    : document.getElementById("btnIDHome").classList.remove(classes.btnScroll)
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

const ham = () => {
  setDisp(!disp)
  document.getElementById("bar1").classList.toggle(classes.changeBar)
  document.getElementById("bar2").classList.toggle(classes.changeBar) 
  document.getElementById("bar3").classList.toggle(classes.changeBar)  
}

  return (
    <>   
      
        <Particles style={{position : 'fixed', width : '100%', height : '100%', zIndex : '-1'}} params={myParams} />

        <Box className={classes.tabsStyle} display='flex' justifyContent='space-between'>
          <img src={portLogo} alt="portLogo" style={{margin : '0.5em 0 0 1em'}} width='40em' height='100%'/>
          <Box display='flex' flexDirection='row'>
              <Button id='btnIDHome' className={classes.btn} onClick={ ()=> document.getElementById("home").scrollIntoView() }>Home</Button>
              <Button id='btnIDAbout' className={classes.btn} onClick={ ()=> document.getElementById("about").scrollIntoView() }>About</Button>
              <Button id='btnIDWorks' className={classes.btn} onClick={ ()=> document.getElementById("works").scrollIntoView() }>Works</Button>
              <Button id='btnIDContact' className={classes.btn} onClick={ ()=> document.getElementById("contact").scrollIntoView() }>Contact</Button>
              
              <Button className={classes.mobileScreen} onClick={()=>setDisp(!disp)}>
                <Box display='flex' flexDirection='column'>
                  <Box id='bar1' className={classes.bars}/>
                  <Box id='bar2' className={classes.bars}/>
                  <Box id='bar3' className={classes.bars}/>
                </Box>
              </Button>
          </Box>

          
        </Box>

        {disp?
        <Box className={classes.mobileBox} display='flex' flexDirection='column' justifyContent='center' alignItems='flex-end'>
          <Fade right cascade>

              <Button id='btnIDHome' className={classes.mobileMenu}
                onClick={ ()=> {
                  document.getElementById("home").scrollIntoView()
                  setDisp(!disp)}}>Home
              </Button>

              <Button id='btnIDAbout' className={classes.mobileMenu}
                onClick={ ()=> {
                  document.getElementById("about").scrollIntoView()
                  setDisp(!disp)}}>About
              </Button>

              <Button id='btnIDWorks' className={classes.mobileMenu}
                onClick={ ()=> {
                  document.getElementById("works").scrollIntoView()
                  setDisp(!disp)}}>Works
              </Button>

              <Button id='btnIDContact' className={classes.mobileMenu}
                onClick={ ()=> {
                  document.getElementById("contact").scrollIntoView()
                  setDisp(!disp)}}>Contact
              </Button>

          </Fade>
        </Box>
        :null
        }


        
        {/* <Box>
          <MobileMenu/>
        </Box> */}
        
        <Box id='home'>
          <Fade left>
            <LandingPage/>
          </Fade>
        </Box>

        <Box id='about'>
          <Fade left>
            <About/>
          </Fade>
        </Box>

        <Box id='works'>
          <Fade left>
            <Works/>
          </Fade>
        </Box>

        <Box id='contact'>
          <Fade left>
            <Contact/>
          </Fade>
        </Box>

        

    </>
  )
}

export default App;
