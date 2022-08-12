import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles({
    root: {
      height: '100vh',
      width:'100vw',
      display:'flex', 
    },
    divider:{
      width:1,
      backgroundColor:'#7EBaff',
      height:'100%',
      filter:"opacity(0.5)"
  },
  main:{
    flex:1,
    overflowY:'auto',
 
  },
  loader:{
    display:'grid',
    placeItems: 'center',
    width:'100%',
    height:'100vh',

  },


  });

  export default useStyles;