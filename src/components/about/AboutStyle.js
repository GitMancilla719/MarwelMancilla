import { makeStyles } from '@material-ui/core'

const AboutStyle = makeStyles( theme => ({
    container : {
        marginTop : '2em',
        padding : '7em 10em 7em 10em',
        [theme.breakpoints.down('md')]: {         
            padding : '7em 5em 7em 5em',
        },
        [theme.breakpoints.down('sm')]: {         
            padding : '7em 3em 7em 3em',
        },
        [theme.breakpoints.down('xs')]: {         
            padding : '7em 1.5em 7em 1.5em',
        },
    },
    titles : {
        color : 'rgb(252, 211, 3)',
        display: 'inline-block',
        fontWeight : '500',
        paddingLeft : '0.1em',
        borderLeft : '0.2em solid rgb(252, 211, 3)',
        margin : '1em 0 0.5em 0',
        [theme.breakpoints.down('xs')]: {         
          fontSize : '20pt'
        }
        
    },
    desc : {
        color : '#FFFFFF',
        textIndent : '3em',
        fontSize : '14pt',
        paddingTop : '0.5em'
    },
    skillBox : {
        width : '100%',
        marginTop : '1em'
    },
    skillContainer : {
        margin : '0.2em'
    },
    skillLogo : {
        width : '7em' 
    },
    skillTitle : {
        textAlign : 'center',
        fontWeight : '500',
        color : '#FFFFFF',
        marginTop : '-0.5em'
    }
})   
)

export default AboutStyle