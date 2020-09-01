import { makeStyles } from '@material-ui/core'

const WorksStyle = makeStyles( theme => ({
    container : {
        marginTop : '2em',
        padding : '7em 10em 20em 10em',
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
        borderLeft : '0.3em solid rgb(252, 211, 3)',
        margin : '0 0 1em 0',
    },
    projBox : {
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'row',
        flexWrap : 'wrap'
    },
    proj : {
        backgroundColor : 'rgb(46, 38, 66, 0.85)',
        color : 'rgb(64, 64, 64)', 
        width : '20em',
        height : '19em',
        margin : '0.5em',
    },
    projImg : {
        display:'flex',
        justifyContent : 'center',
        alignContent : 'center',
        backgroundColor : '#FFFFFF',
        width : '100%',
        height : '55%',
        paddingTop : '0.5em',
        paddingBottom : '0.5em',
    },
    projDesc : {
        width : '100%',
        height : '100%',
        color : '#FFFFFF',
        padding : '0.7em'
    },
    bGroup : {
        //backgroundColor : '#FFF123',
        marginTop : '0.5em',
        marginLeft : '7em'
    },
    buttonG : {
        color : '#FFFFFF'
    }
})   
)

export default WorksStyle