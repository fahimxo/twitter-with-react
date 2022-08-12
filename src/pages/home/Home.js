import { Divider } from '@material-ui/core';
import React,{useCallback, useContext,useEffect,useState} from 'react';
import Header from '../../components/header/header';
import NewTwitte from './components/NewTwitte';
import TwiteeList from './components/TwitteList';
import useStyles from './styles' 
import HomeIcon from '@material-ui/icons/Home';
import { getAllTwittes } from '../../components/api/api-twittes';
import {setTwitteList, twitteContext,twitteDispatchContext} from '../../context/twitteContext'
import LoadingSkeleton from '../../components/skeleton/LoadingSkeleton';



const Home = () => {
  
  const classes=useStyles()
  const [loading, setLoading] = useState(true);

  const dispatch=useContext(twitteDispatchContext)
  const {twitteList}=useContext(twitteContext)
  

  const renderTwittes =useCallback(()=>{
      getAllTwittes((isok,data)=>{
            if(isok){
              setLoading(false)
              setTwitteList(dispatch,data)
            }else{      
              setLoading(false)
              console.log(data);
            }
          })
    },[dispatch])
  
  useEffect(()=>{  

    renderTwittes()
 
  },[renderTwittes])
    return (
        <div className={classes.home}>
            <Header title='خانه' icon={<HomeIcon className={classes.homeLogo}/>}/>
            <Divider className={classes.divider}/>
            <NewTwitte renderTwittes={renderTwittes}/>
            {loading ? 
            <>
            <LoadingSkeleton/>
            <LoadingSkeleton/>
            </>
            :<TwiteeList data={twitteList}/>}
            
        </div>
    );
}

export default  React.memo(Home);
