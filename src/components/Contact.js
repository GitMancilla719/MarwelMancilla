import React from 'react'
import emailjs from 'emailjs-com'
import { Box, Typography,TextField, Button, makeStyles  } from '@material-ui/core'

const ContactStyle = makeStyles( theme => ({
    Container : {
        backgroundColor : '#262631c5', 
        width : '100%', 
        height : 'auto', 
        color : '#FFFFFF',
        padding : '2.5em 0 1em 0'
    },
    forms : {
        width : '35em',
        marginBottom : '0.7em',
        [theme.breakpoints.down('xs')]: {         
            width : '18em',
        },
    },
    inputs : {
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { //bordercolor initial
            borderColor: "white"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {//bordercolor onfocus
            borderColor: "#FFF123"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": { //input text color onfocus
            color: "white"
          },
          "& .MuiOutlinedInput-input": { //after typing input color
            color: "white"
          },
          "& .MuiInputLabel-outlined": { //label color initial
            color: "white"
          },
          margin : '0.25em',
          "&:nth-child(5)": {
            backgroundColor : '#5465FF',
            color : '#FFFFFF',
            width : '15em'
          }
          
    },
    ContactBox : {
        margin : '1em 0 1em 0',
        //backgroundColor : '#FFF123',
    },
    ContactText : {
        "&:nth-child(1)": {
            fontWeight : '500',
            borderBottom : '5px solid #FFF123',
            marginBottom : '0.2em',
            [theme.breakpoints.down('xs')]: {         
                fontSize : '25pt',
                borderBottom : '5px solid #FFF123',
            },
        },
        fontWeight : '300',
        [theme.breakpoints.down('xs')]: {         
            fontSize : '12pt',
            padding : '0 1.5em 0 1.5em'
        },    
    }
})
)   


const Contact = () => {
    const classes = ContactStyle()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('akosiemem19', 'portfolio-email-template', e.target, 'user_45uVLkV5TnUZxICZW4w5q')
        .then((result) => {
            console.log('result', result.text)
            alert('Message Sent')
        }, (error) => {
            console.log('error', error.text)
            alert('Something went wrong')
        })
        e.target.reset()
    }
    return (
        <>
            <Box className={classes.Container} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box className={classes.ContactBox} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Typography className={classes.ContactText} variant='h3'>Contact Me</Typography>
                    <Typography className={classes.ContactText} variant='h5'>Feedbacks, Inquiries or Employment Opportunities?</Typography>
                    <Typography className={classes.ContactText} variant='h6'>I would love to hear from you</Typography>
                </Box>

                <form onSubmit={sendEmail} autoComplete="off" className={classes.forms}>
                <Box display='flex' mx='auto' flexDirection='column' >
                    <TextField className={classes.inputs} variant="outlined" label="Name" name="name" required/>
                    <TextField className={classes.inputs} type='email' variant="outlined" label="Email" name="email" required/>
                    <TextField className={classes.inputs} variant="outlined" label="Subject" name="subject"/>
                    <TextField className={classes.inputs} variant="outlined" label="Message" name="message" multiline rows={5} required/>
                    <Button className={classes.inputs} type="submit" value="Send" variant="outlined" size='large'>Send</Button>
                </Box>
                </form>

                <Typography>© Marwel Mancilla 2020</Typography>
            </Box> 
        </>
    )
}

export default Contact
