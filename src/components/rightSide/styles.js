import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  rightSide: {
    width: "20%",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  [theme.breakpoints.down("650")]: {
    twitterLogo: {
      fontSize: "30px!important",
    },
    logoType: {
      fontSize: "1.6rem!important",
    },
    hashtags: {
      marginRight: ".5rem",
      fontSize: ".9rem",
    },
    hotHashtagWrapper: {
      alignItems: "center",
      justifyContent: "space-between",
      gap: ".3rem",
    },
    hotHashtags: {
      paddingRight: "0px!important",
      paddingLeft: "0px!important",
      margin:'.9rem 0'
    },
    hotHashtagIcon: {
      color: "#fe4242",
      fontSize:'1.8rem',
      marginLeft:'.5rem'
    },
    closebtn: {
      marginLeft: "-1rem",
      marginRight:'.8rem',
      padding:'7px'
    },
    homeLogo:{
      color:'#179CF0',
      fontSize:'1.88rem',
      marginLeft:'.9rem'
    },
    listText:{
      fontWeight:600,
      fontSize:'1.07rem'
      
    },
    bestReportLogo:{
      color:'#657786',
      fontSize:'1.8rem',
      marginLeft:'.9rem'
    },
    exitLogo:{
      fontSize:'1.88rem',
      marginLeft:'.9rem'
    }

  },
  twitterLogo: {
    fontSize: "40px",
    color: "#1D9BF0",
  },
  logoType: {
    fontSize: "1.9rem",
    color: "#1D9BF0",
    fontWeight: "600",
  },
  hashtagHeader:{
    alignItems:'center',
    marginTop: "3rem",
    marginBottom: "1.5rem",
  },
  hashtagTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  hashtags: {
    marginRight: "1rem",
    padding: "8px 0 8px 8px",
  },
  hashtagParent: {
    marginBottom: "0.5rem",
    width: "100%",
    padding: ".2rem",
  },
  hotHashtagIcon: {
    color: "#fe4242",
    fontSize:'1.8rem',
  },
  hotHashtagIcon: {
    color: "#fe4242",
    fontSize:'1.9rem',
  }
}));

export default useStyles;
