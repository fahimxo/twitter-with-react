
import { Divider } from '@material-ui/core';
import React,{useEffect,useContext,useState} from 'react';
import Header from '../../components/header/header';
import useStyles from '../home/styles' 
import TwiteeList from '../home/components/TwitteList';
import { useParams } from 'react-router-dom';
import { getAllTwittesByUser, getUsers } from '../../components/api/api-twittes';
import { setTwitteList, twitteContext,twitteDispatchContext } from '../../context/twitteContext';
import LoadingSkeleton from '../../components/skeleton/LoadingSkeleton';


const TwittesByHashtag = () => {

  const dispatch=useContext(twitteDispatchContext)
  const {twitteList}=useContext(twitteContext)

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("/images/user.png");

  const classes=useStyles()
  const {id,name}=useParams()

  
 
  useEffect(() => {
    setLoading(true)
    const user ={
        "user":id
    }
    getAllTwittesByUser(user,(isok,data)=>{
      if(isok){
        setLoading(false)
        setTwitteList(dispatch,data)
  
      }else{
        setLoading(false)
        console.log(data);
      }
    })

    getUsers((isok,data)=>{
      if(isok){ 
        const foundUser=data.slice(2).find(p=>p._id === id)
        if(foundUser.image) return setImage(foundUser.image)     
        setImage("/images/user.png")
        
      }else{
        console.log(data);
      }
     })
     
    }, [id,dispatch]);

    return (
        
        <div className={classes.home}>
            <Header title={name} 
            icon={<img src={image}
            className={classes.iconImg} 
            alt='userImage'/>}/>
            <Divider className={classes.divider}/>
            {loading ? 
            <>
            <LoadingSkeleton/>
            <LoadingSkeleton/>
            <LoadingSkeleton/>
            </>
            :<TwiteeList data={twitteList}/>}

        </div>
       
    );
}

export default TwittesByHashtag;
