import { Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import BestReporters from './BestReporters';
import useStyles from './styles'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import {useNavigate} from 'react-router-dom'
import { uploadAvatar } from '../api/api_auth';
import { changeUserImg, twitteContext, twitteDispatchContext } from '../../context/twitteContext';


const LeftSide = () => {
    const classes=useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [imagePath, setImagePath] = React.useState();
  const open = Boolean(anchorEl);
  const navigate=useNavigate()
  const inputFile=React.useRef()


 
  const {userImg} = useContext(twitteContext);
  const dispatch = useContext(twitteDispatchContext);
  



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const logoutHandler = () => {
      localStorage.clear()
      navigate('/login')
    
  };
  const imgHandler = () => {
  
    const userImage=JSON.parse(localStorage.getItem("user")).image
    if (userImg && userImg !== "undefind") {
        return userImg
    }
    if (userImage) {
        return userImage
    }
    if (imagePath) {
        return imagePath
    }
    return "/images/user.png"
  };

  
  const changeAvatarHandler = e => {

    if(e.target.files && e.target.files.length >0){
        let imageFile=e.target.files[0]
        const reader=new FileReader()
        reader.onload=(e)=>{
            setImagePath(e.target.result)
       
        }
        reader.readAsDataURL(imageFile)
        const formData= new FormData()
        formData.append("image",imageFile)
        
        uploadAvatar(formData,(isok,data)=>{
          if (isok) {
            changeUserImg(dispatch,data.imagePath)
            
          }else{
            console.log(data);
          }
        })
          
    }
 
  };

  const user=JSON.parse(localStorage.getItem('user'))

    return (
        <div className={classes.leftSide}>
            <Grid container justifyContent='space-evenly' alignItems='center' direction='row-reverse' >
                <img className={classes.userImg} src={imgHandler()} alt='user' width={'50px'}/>
                <Grid item >
                <Typography className={classes.userName}>{user.name}</Typography>
                <Typography  className={classes.userId}>@{user.username}</Typography>
                <input type='file' onChange={changeAvatarHandler} ref={inputFile} style={{display:"none"}}/>
                </Grid>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: 'max-content',
                },
                }}> 
                <MenuItem  onClick={handleClose}>
                  <div onClick={()=>inputFile.current.click()} className={classes.menuItem}>
                    <PhotoCameraIcon color='primary'/>ویرایش عکس </div>
                </MenuItem>
                <MenuItem  onClick={handleClose}>
                  <div onClick={logoutHandler} className={classes.menuItem}><ExitToAppIcon color='secondary'/>خروج </div>
                </MenuItem>
            
            </Menu>
                  
                <BestReporters/>
                 
            </Grid>
     

        </div>
    );
}

export default LeftSide;
