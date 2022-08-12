import { Button, Grid, IconButton } from '@material-ui/core';
import React,{useContext,useState,useRef, useEffect, useCallback} from 'react';
import useStyle from '../styles' 
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { postNewTwitte } from '../../../components/api/api-twittes';
import CloseIcon from '@material-ui/icons/Close';
import { twitteContext } from '../../../context/twitteContext';
import { twitteDispatchContext } from '../../../context/twitteContext';
import { setTwitte } from '../../../context/twitteContext';


const NewTwitte = ({renderTwittes}) => {
    const classes=useStyle()
    const inputFile = useRef()
    const inputText = useRef()

    const {twitte,userImg}=useContext(twitteContext)
    const dispatch=useContext(twitteDispatchContext)  

    const [imageFile,setImageFile] =useState()
    const [imagePath,setImagePath] =useState()
 
    const NewTwitteHandler=()=>{    
        if (!twitte) return

            const formData= new FormData()
            formData.append("text",twitte)
            if(imageFile) formData.append("image",imageFile)
        
        postNewTwitte(formData,(isok,data)=>{
            if (isok) {
                renderTwittes()
                console.log(data);
                setTwitte(dispatch,'')
                setImagePath(undefined)
            }else{
                console.log(data);

            }
        })
    }

    const insertImg = (e) => {
        if(e.target.files && e.target.files.length >0){
            setImageFile(e.target.files[0])
            console.log(e.target.files[0]);

            const reader=new FileReader()
            reader.onload=(e)=>{
            setImagePath(e.target.result)
       
        }
        reader.readAsDataURL(e.target.files[0])
        }
    }

      const imgHandler = useCallback(() => {
        
        const userImage=JSON.parse(localStorage.getItem("user")).image
        if (userImg && userImg !== "undefind") {
            return userImg
        }
        if (userImage) {
            return userImage
        }
        return "/images/user.png"
      },[userImg])

    useEffect(() => {
        inputText.current.focus()
        imgHandler()
    }, [imgHandler]);

    return (
        <div className={classes.newTwitte}>
            <Grid container>
                <img className={classes.profImg} src={imgHandler()} alt='user'/>
                <textarea value={twitte} ref={inputText} onChange={e=>setTwitte(dispatch,e.target.value)} spellCheck={false}
                 className={classes.inputText} placeholder='چیزی بنویسید...'/>
                 <input type='file' style={{display:'none'}} ref={inputFile} onChange={insertImg}/>
            </Grid>
            <div>
                {imagePath?<div className={classes.twitteImg} 
                style={{backgroundImage:`url(${imagePath})`}}>
                <CloseIcon onClick={()=>setImagePath(undefined)} className={classes.closebtn}/></div>:null}
            </div>
            <Grid container direction='row-reverse' alignItems='center' style={{marginTop:'1rem'}} >
                <Button variant='contained' className={classes.twittebtn} color='primary' onClick={NewTwitteHandler}>توییت</Button>
                <IconButton className={classes.btns} onClick={()=>inputFile.current.click()}>
                <InsertPhotoIcon className={classes.favIcon}/>
                </IconButton>

            </Grid>
        </div>
    );
}

export default NewTwitte;
