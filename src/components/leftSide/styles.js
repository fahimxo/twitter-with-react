import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme=>({

    leftSide:{
        width:'25%',
        padding:'20px',
        [theme.breakpoints.down('1035')]:{
            width:'30%',
            
        },
        [theme.breakpoints.down('sm')]:{
            width:'40%',

        },    
    },
    [theme.breakpoints.down("650")]: { 
        bestReportLogoMain:{
            fontSize:'1.8rem!important',
          },

    },
    [theme.breakpoints.down("450")]: { 
        bestReportLogoMain:{
            fontSize:'1.5rem!important',
          },
          userImg:{
            width:'40px!important',
            height:"40px!important",
        },
        userId:{
            fontSize:'.7rem!important',
        },
        userName:{
            fontSize:'.85rem!important'
        },
    },
    userImg:{
        borderRadius:'50%',
        width:'50px',
        height:"50px",
        objectFit:'cover'
    },
    userId:{
        color:'#888',
        fontSize:'.75rem',
        direction:"ltr"
    },
    userName:{
        fontSize:'1.2rem'
    },
    profTextbr:{
        marginRight:'.7rem',
        textAlign: 'right'
    },
    BestReportersSecMain:{
        backgroundColor:'#f5f8fa',
      },
    BestReportersSec:{
        backgroundColor:'#f5f8fa',
        marginTop:'3rem',
        borderRadius:'0 2.5rem 2.5rem 0',
        height:'calc(100vh - 150px)',
        overflowY:'auto'
    },
    brParent:{
        padding:'11px 24px',
        flexWrap: 'nowrap',
        
    },
    menuItem:{
        display:"flex",
        gap:'2px',
        width:'100%'
    },
    bestReportLogoMain:{
        color:'#657786',
        fontSize:'2rem',
    },
    BestReportersHeader:{
        textAlign:'center',
        marginBottom:'.6rem',
        padding:' 17px 24px 10px',
        
    },
    BestReportersTitle:{
        fontSize:'1.2rem',
        fontWeight:'bold',
    },
    bestReportLogo:{
        color:'#657786',
        fontSize:'1.8rem!important',
        marginLeft:".3rem"
      }
  }));

  export default useStyles;