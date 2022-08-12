import { ButtonBase, Divider, Grid, Typography } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api/api-twittes";
import Header from "../header/header";
import useStyles from "./styles";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const BestReporters = () => {
  const classes = useStyles();
  
  const [bestReporters,setBestReporters] = useState([])
  
  useEffect(()=>{
   getUsers((isok,data)=>{
    if(isok){
      setBestReporters(data.slice(2))
    }else{
      console.log(data);
    }
   })
  },[])

  const imgHandler = (img) => {
     if (img) {
        return img
    }
    return "/images/user.png"
  };

  return (
    <>
         <Header title='بهترین خبرنگاران' icon={<AssignmentIndIcon className={classes.bestReportLogoMain}/>}/>

            <Divider className={classes.divider}/>  
        <Grid container className={classes.BestReportersSecMain}>
            <Typography className={classes.BestReportersTitle}>بهترین خبرنگاران</Typography>
      {bestReporters.map((item) => (
        
        <div key={item._id} style={{width:'100%'}} >
          <Divider/>
          <ButtonBase style={{width:'100%'}}>
            <div style={{width:'100%'}}>
              
            <Link to={`/users/${item._id}/${item.name}`} >
          <Grid container className={classes.brParent} alignItems="center">
            <img
              className={classes.userImg}
              src={imgHandler(item.image)}
              alt="user"
              width={"45px"}
            />
            <Grid item className={classes.profTextbr}>
            <Typography className={classes.userName}>
                {item.name}
              </Typography>
              <Typography className={classes.userId}>@{item.username}</Typography>
            </Grid>
          </Grid>
          </Link>
          </div>
          </ButtonBase>
        </div>
      ))}
     </Grid></>
  );
};
export default BestReporters;
