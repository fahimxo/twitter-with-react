import {createTheme} from '@material-ui/core/styles'
import tinyColor from 'tinycolor2'


const primaryColor ='#179CF0'
const Theme=createTheme({
    palette:{
        primary:{
            main:primaryColor,
            light:tinyColor(primaryColor).lighten().toHexString()
        }
    },
   overrides:{
        MuiTypography:{
            root:{
                fontFamily:'Vazir!important',
               
            
            }
        }
        
        
   }
  })

  export default Theme;