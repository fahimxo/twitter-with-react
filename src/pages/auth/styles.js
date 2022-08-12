import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles(theme=>({
    container:{
        display:'grid',
        placeItems: 'center',
        background: 'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(224,235,238,1) 0%, rgba(148,193,237,1) 62%)',
        height:'100vh',
        width:'100vw'
        
    },
    [theme.breakpoints.down("490")]: {
        container:{
            with:'100%!important',
            height:'100vh',
        },
        authcard:{
            width:'100%!important',
            height:'100vh',
            borderRadius:'initial!important'
        },
        headerText:{
            fontSize:'1.1rem!important'
        },
        twitterLogo:{
            fontSize:'1.9rem!important'
        },
        input:{
            fontSize:".8rem!important"
        }
    },
    [theme.breakpoints.down("390")]: {
     
        inputlabel:{
            flex:'.5!important',
            fontSize:'.7rem!important',

        },
        inputgroup:{
            width:'90%!important',
            gap:'.3rem!important',
            margin:'0 auto!important'
        },
        authbtn:{
            minWidth:'4rem!important',
            fontSize:'.8rem!important' 
        },
        signGoogle:{
            gap: '.5rem!important',
            padding:'.2rem .5rem!important',
        },
        googleImg:{
            width:'1.9rem!important'
        },
        googleText:{
            fontSize:".8rem!important"
        },
        or:{
            fontSize:".8rem"
        },
        alertcontainer:{
            position:'fixed',
            width:'93%!important',
            top:5,
            right:5
        }
    

    },
    authcard:{
        width:'30rem',
        display:'flex',
        flexDirection:'column',
        borderRadius:'1rem'
    },
    headerAuth:{
        margin:'1rem',
        textAlign:'center',
    },
    headerText:{
        
        fontSize:'1.3rem'
    },
    twitterLogo:{
        color:'#1D9BF0',
        fontSize:'2.2rem'
    },
    tab:{
        flex:1
    },
    signcard:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'2rem',
        gap:'1.6rem'

    },
    inputgroup:{
        display:'flex',
        alignItems:'center',
        width:'60%',
        justifyContent:"center",
        gap:'.3rem',
        margin:'0 auto'
    },
    input:{
        flex:'3',
    },
    inputlabel:{
        flex:'1',
        alignSelf:'start',
        display:'flex',
        fontSize:'.85rem',
        justifyContent:"flex-end",
    },
    authbtn:{
        color:'white!important',
        borderRadius:'1.2rem!important',
        minWidth:'6rem',
        fontSize:'1rem',

    },
    alert:{
        direction:"initial",

    },
    alertcontainer:{
        position:'fixed',
        width:'max-content',
        top:10,
        right:10,
        zIndex:'10'
    },
    orContainer:{
        width:'60%',
        textAlign:'center',
        
    },
    hr:{
        flex:6,
        alignSelf: 'center',
    },
    or:{
        flex:1
    },
    signGoogle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding:'.2rem 1rem',
        border:'1px solid #3333',
        boxShadow:' 0px 1px 8px 1px rgba(0,0,0,0.15)',
        borderRadius:'2rem',
        cursor:'pointer',
        transition:'all .2s ease-out',
        '&:hover':{
            boxShadow:'none'
        },

    },
    googleImg:{
        width:'2.4rem'
    },
    googleText:{
        fontWeight:'bold'
    }


}))
export default useStyles