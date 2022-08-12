import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles(theme=>({

    header:{
        alignItems:'center',
        padding:18,
        backgroundColor:'#ffff',
        gap:'.5rem',
        
    },
   
    [theme.breakpoints.down('450')]:{
        menuIcon:{
            fontSize:'1.7rem!important'
        },
        headerTitle:{
            fontSize:'1.2rem!important',
        },
        iconbtn:{
            marginLeft:'1.4rem!important',     
        }
    },
    headerTitle:{
        fontSize:'1.6rem',
        fontWeight:600,
        marginRight:'.6rem'
    },
    iconbtn:{
        marginLeft:'2rem',     
    },
    menuIcon:{
        fontSize:'2rem'
    }
    
}))
export default useStyles