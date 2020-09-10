import { makeStyles } from '@material-ui/core'

const AppStyle = makeStyles( theme => ({
    tabsStyle : {
        color : '#FFFFFF',
        position : 'fixed',
        backgroundColor : '#0d0818',
        width : '100%',
        zIndex : 10
    },
    btn : {
        color : '#FFFFFF',
        width : '7em',
        margin : '0 0.5em 0 0.5em',
        [theme.breakpoints.down('xs')]: {         
            display : 'none'
        }
    },
    btnScroll : {
        animation : '$btnscroll 0.7s forwards'
    },
    '@keyframes btnscroll' : {
        '100%' : { color : "#FFF123",}
    },
    mobileScreen : {
        color : '#FFFFFF',
        [theme.breakpoints.up('sm')]: {         
            display : 'none',
        }
    },
    mobileMenu : {
        color : '#FFFFFF',
    },
    mobileBox : {
        width : '100%',
        zIndex : 11,
        backgroundColor : '#0d0818',
        position : 'fixed',
        marginTop : '3em',
        [theme.breakpoints.up('sm')]: {         
            display : 'none',
            
        }
    },
    bars : {
        width: '25px',
        height: '3.5px',
        backgroundColor: '#FFFFFF',
        margin: '0.2em',
        transition: '0.2s',
    }
    
    
})   
)

export default AppStyle