import React,{useState} from 'react';
import {TextField, Button ,InputLabel} from "@material-ui/core";
import useStyle from "./styles";
import { useForm ,Controller} from 'react-hook-form';
import { registerApi } from '../../components/api/api_auth';
import {Alert,AlertTitle} from '@material-ui/lab/';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import CircularProgress from '@material-ui/core/CircularProgress'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  
  const classes=useStyle()
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate=useNavigate()
    
const showAlert=()=>{
  setOpen(true)
  setTimeout(() => {
    setOpen(false)
    
  }, 5000);
}

    const {control,handleSubmit,} = useForm({
        defaultValues: {
          name: '',
          username: '',
          password: '',
        } });

    const myHelperReg={

        name:{
          required:"نام الزامی است",
         },
        username:{
          required:"نام کاربری الزامی است",
         },
         password:{
          required:"رمز عبور الزامی است",
          minLength:"رمز عبور باید حداقل ۵ حرف باشد", 
         }
       }
       const onSubmitReg = (data) => {
        setLoading(true)
        console.log(data);
        registerApi(data,(isok,data)=>{
            if(isok) {
              setLoading(false)
              console.log(data);
              localStorage.setItem("user",JSON.stringify(data))
              navigate('/')
            }else{
              setLoading(false)
              setError(data)
              showAlert() 
             
            }
        })
      }
    return (
        <>
      
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
      <strong>{error}</strong>
    </Alert>:null}
    </div>
         <form onSubmit={handleSubmit(onSubmitReg)}>
        <div className={classes.signcard}>
           
            <div className={classes.inputgroup}>
            <InputLabel className={classes.inputlabel} >نام</InputLabel>
                <Controller
                    name="name"
                    control={control}
                    rules={{
                      required:true
                    }}
                    render={({ field,fieldState:{error} }) => 
                    <TextField  {...field}
                    type='text'
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    error={error !== undefined}
                    helperText={error ?myHelperReg.username[error.type]:''} 
                    className={classes.input}/>}
                  />
            </div>
            <div className={classes.inputgroup}>
            <InputLabel className={classes.inputlabel} >نام کاربری</InputLabel>
                <Controller
                    name="username"
                    control={control}
                    rules={{
                      required:true
                    }}
                    render={({ field,fieldState:{error} }) => 
                    <TextField  {...field}
                    type='text'
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    error={error !== undefined}
                    helperText={error ?myHelperReg.username[error.type]:''} 
                    className={classes.input}/>}
                  />
            </div>
            <div className={classes.inputgroup}>
            <InputLabel className={classes.inputlabel} >رمز عبور</InputLabel>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                      required:true,
                      minLength:5,
                      value:8
                      
                    }}
                    render={({ field,fieldState:{error} }) => 
                    <TextField {...field} 
                    type='password'
                    size="small"
                    
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    error={error !== undefined}
                    helperText={error ?myHelperReg.password[error.type]:''} 
                    className={classes.input}/>}
                  />
            </div>
            <Button type="submit" disabled={loading} className={classes.authbtn} variant="contained" color="primary">
              {loading?<CircularProgress size="1.6rem" />:"ثبت نام"}</Button>
            </div>
            </form>
        
        </>
        )
    }

                

export default Register;
