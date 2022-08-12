import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles(theme=>({
    home:{
        backgroundColor:'#e6e6e6',
       
    },
    homeLogo:{
        fontSize:'2rem',
        color:'#179CF0',
        [theme.breakpoints.down('sm')]:{
            width:'100%',

        }
    },
    [theme.breakpoints.down('450')]:{
        homeLogo:{
            fontSize:'1.6rem',
        },
        profImg:{    
            width:'40px!important',
            height:'40px!important',
            
        },
        inputText:{
            fontSize:'.79rem!important'
        },
        twittebtn:{
            width:'2rem!important'
        },
        btns:{
            width:'2rem!important',
            height:'2rem!important',
        },
        userName:{
            fontSize:'.8rem'
        },
        userId:{
            fontSize:'.7rem!important',
            lineHeight:'19px!important'
        },
        twitteText:{
            fontSize:'.79rem!important'

        }

    },
    divider:{
        backgroundColor:'#7EBAFF',
        filter:'opacity(.3)'
    },
    newTwitte:{
        backgroundColor:'#ffff',
        padding:'18px'
    },
    profImg:{
        borderRadius:'50%',
        width:'50px',
        height:'50px',
        objectFit:'cover'
    },
    iconImg:{
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        objectFit:'cover'
    },
    inputText:{
        flex:1,
        border:'none',
        outline:'none',
        resize:'none',
        padding:'.5rem .2rem',
        maxWidth:'540px',
        height:'65px',
        maxHeight:"100px",
        overflowY:'auto',
        margin: '1rem 1rem 1rem 0',
        fontSize: '.85rem'
        
    },
    twittebtn:{
        color:'white!important',
        borderRadius:'2rem!important',
        width:'6rem',
        marginRight:'1.5rem'
    },
    btns:{
        borderRadius:'50%',
        padding:'.3rem',
        border:'1px solid #3333',
        width:'2.3rem',
        height:'2.3rem',
    },
    favIcon:{
        color:'red',
    },
    TwitteItem:{
        backgroundColor:'#ffff',
        padding:'18px',
        marginTop:'.5rem'
    },
    userId:{
        color:theme.palette.text.secondary,
        fontSize:'.8rem',
        direction:"ltr",
        textAlign:'center',
        lineHeight:'25px'
    },
    TwitteHeader:{
        alignItems:'flex-start',
        gap:'.8rem'

    },
    twitteText:{
        fontSize:'.85rem',
        width:'100%',
        margin:'0 2rem',
        whiteSpace:"break-spaces",
        textAlign:'justify',
        overflowWrap: 'anywhere' ,
        flex:'1',

    },
    twitteContent:{
        margin:'1rem auto',
    
    },
    controlbtns:{
        gap:'1rem',
        marginTop:'1rem'
    },
    twitteImgWrapper:{
        flex:'1',
    },
    twitteImg:{
        height:"12rem",
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        width:'100%',
        position:'relative',

    },
    closebtn:{
        color:"white",
        backgroundColor:"#FF0000",
        borderRadius:"50%",
        width:"1.5rem",
        height:"1.5rem",
        cursor:'pointer',
        border: '1px solid #3335',
        position: 'absolute',
        left: '-13px',
        top: '-13px',
    },
    noAnyTwitte:{
        height:'513px',
        backgroundRepeat:'no-repeat',
        backgroundImage:"url(/images/1.png)",
        backgroundPosition:'center',
        backgroundSize: 'cover',
        color:'white',
        padding:'2rem',
        fontSize:'1.9rem'

    }
   


}))
export default useStyles;