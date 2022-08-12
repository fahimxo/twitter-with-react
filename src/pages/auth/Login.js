import { Paper, Typography, Tabs, Tab, TextField, Button ,InputLabel} from "@material-ui/core";
import React,{useState} from "react";
import useStyle from "./styles";
import TwitterIcon from '@material-ui/icons/Twitter';
import {Alert,AlertTitle} from '@material-ui/lab/';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import { useForm ,Controller} from 'react-hook-form';
import Register from "./Register";
import { loginApi } from "../../components/api/api_auth";
import CircularProgress from '@material-ui/core/CircularProgress'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const classes=useStyle()
  
  const [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()

  
const showAlert=()=>{
  setOpen(true)
  setTimeout(() => {
    setOpen(false)
    
  }, 5000);
}

  const {control,handleSubmit,} = useForm({
    defaultValues: {
      username: '',
      password: '',
    } });

   const onSubmitLogin = (data) => {
    setLoading(true)
    loginApi(data,(isok,data)=>{
      if(isok){
        setLoading(false)
        localStorage.setItem("user",JSON.stringify(data))
        navigate('/')
      }else{
        setLoading(false)
        showAlert()
      }
    
    })
  }

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (<>
        <div className={classes.container}>
      <div className={classes.alertcontainer}>{open?<Alert 
      
      className={classes.alert}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      severity="error">
      <AlertTitle>Error</AlertTitle>
      <strong> کاربری با این نام کاربری و رمز عبور یافت نشد!</strong>
    </Alert>:null}</div>
      <Paper square className={classes.authcard}>
        <div className={classes.headerAuth}>
        <TwitterIcon className={classes.twitterLogo}/>
        <Typography className={classes.headerText}>به توییتر خوش آمدید</Typography>
        
        </div>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="ورود"  value={1} className={classes.tab}/>
          <Tab label="ثبت نام" value={2} className={classes.tab}/>
        </Tabs>
        {value === 1 &&
          <form onSubmit={handleSubmit(onSubmitLogin)}>
        <div className={classes.signcard}>
            <div  className={classes.inputgroup}>
            <InputLabel className={classes.inputlabel} >نام کاربری</InputLabel>
                <Controller
                    name="username"
                    control={control}
                    rules={{
                      required:"نام کاربری الزامی است"
                    }}
                    render={({ field,fieldState:{error} }) => 
                    <TextField {...field} 
                    type='text'
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    error={error !== undefined}
                    helperText={error ? error.message:''} 
                    className={classes.input}/>}
                  />
            </div>
            <div className={classes.inputgroup}>
            <InputLabel className={classes.inputlabel} >رمز عبور</InputLabel>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                      required:"رمز عبور الزامی است",
                      minLength:{
                        value:5,
                        message:"رمز عبور باید حداقل ۵ حرف باشد"}
                    }}
                    render={({ field,fieldState:{error} }) => 
                    <TextField {...field} 
                    type='password'
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    error={error !== undefined}
                    helperText={error ? error.message:''} 
                    className={classes.input}/>}
                  />
            </div>
            <Button type="submit" disabled={loading} className={classes.authbtn} variant="contained" color="primary">
            {loading?<CircularProgress size="1.6rem" />:"ورود"}
            </Button>
            
            </div>
            </form>}
        {value === 2 && <Register/>}

       </Paper>
    </div>
    </>
   );
};
        

export default Login;
