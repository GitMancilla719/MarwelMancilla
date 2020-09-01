import { makeStyles } from '@material-ui/core'

const LandingPageStyle = makeStyles( theme => ({
   mainBox : {
      padding : '15em 0 1em 10em',
      height : '29em',
      [theme.breakpoints.down('xs')]: {         
         padding : '15em 0 1em 2em',
      }
   },
   Name : {
      fontWeight : 500,
      fontSize : '60pt',
      color : '#FFFFFF',
      lineHeight : '0.8em',
      //fontFamily : "'Comfortaa', sans-serif",
      [theme.breakpoints.down('xs')]: {         
         fontSize : '40pt',
      }
   },
   Position : {
      marginTop : '-0.1em',
      color : 'rgb(252, 211, 3)',
      [theme.breakpoints.down('xs')]: {         
         fontSize : '20pt',
      },
      
   }
})   
)

export default LandingPageStyle