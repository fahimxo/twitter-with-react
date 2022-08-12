
import { Divider } from '@material-ui/core';
import React,{useContext,useEffect,useState} from 'react';
import Header from '../../components/header/header';
import useStyle from '../home/styles' 
import TwiteeList from '../home/components/TwitteList';
import { useParams } from 'react-router-dom';
import { setTwitteList, twitteContext,twitteDispatchContext } from '../../context/twitteContext';
import { getAllTwittesByHashTag } from '../../components/api/api-twittes';
import LoadingSkeleton from '../../components/skeleton/LoadingSkeleton';


const TwittesByHashtag = () => {
    const classes=useStyle()
    const [loading, setLoading] = useState(false);
    const {twitteList}=useContext(twitteContext)
    const dispatch=useContext(twitteDispatchContext)
    const {id}=useParams()
    useEffect(()=>{
      setLoading(true)
      const hashtag={
        "hashTag":id
      }
      getAllTwittesByHashTag(hashtag,(isok,data)=>{
        if(isok){
          setLoading(false)
          setTwitteList(dispatch,data)
        }else{
          setLoading(false)
          console.log(data);
        }
      })
    },[id,dispatch])
    
    
    return (
        <div className={classes.home}>
            <Header title={id} icon={<img src='/images/hashtag.png' style={{objectFit:'contain',width:'30px'}} alt='hashtag'/>}/>
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
