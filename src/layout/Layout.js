
import React,{useEffect,useState} from 'react';
import LeftSide from '../components/leftSide/LeftSide';
import RightSidebar from '../components/rightSide/RightSidebar';
import {CircularProgress, Divider, Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core'
import useStyles from './styles';
import { Route, Routes ,useNavigate} from "react-router-dom";
import Home from '../pages/home/Home';
import TwittesByUser from '../pages/twittesByUser/TwittesByUser';
import TwittesByHashtag from '../pages/twittesByHashtag/TwittesByHashtag'
import NotFound from '../pages/NotFound/NotFound';
import TwitteProvider from '../context/twitteContext';
import { getProfile } from '../components/api/api_auth';
import RightDrawer from '../components/drawer/RightDrawer';
import LayoutProvider from '../context/layoutContext';
import BestReportersMain from '../components/leftSide/BestReportersMain';


const Layout = () => {
    const classes=useStyles()
    const navigate=useNavigate()
    const [loading, setLoading] = useState(true)
    const theme=useTheme()
    const isTabletSize =useMediaQuery(theme.breakpoints.down("977"))
    const isMobileSize =useMediaQuery(theme.breakpoints.down('650'))

    useEffect(() => {
        getProfile((isok,data)=>{
            if(isok){
                console.log(data)
                localStorage.setItem("user",JSON.stringify(data))
                setLoading(false)
            }else{
                console.log(data);
                localStorage.clear()
                setLoading(false)
                navigate('/login')
            }
        })
     
        
    }, []);

    if(loading) return (
        <div className={classes.loader}>
            <Grid container direction='column' justifyContent='center' alignItems='center'>
                <CircularProgress />
                <Typography style={{marginTop:'1rem'}}>لطفا صبر کنید...</Typography>
           </Grid>
        </div>
    )
    return (
        <div className={classes.root}>
            <LayoutProvider>
            <TwitteProvider>
                {isTabletSize ? <RightDrawer/> :<RightSidebar/>}
                <Divider orientation={'vertical'} className={classes.divider}/>
                <div className={classes.main}>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/hashtag/:id" element={<TwittesByHashtag/>} />
                        <Route path="/bestreporters" element={<BestReportersMain/>} />
                        <Route path="/users/:id/:name" element={<TwittesByUser/>} />
                        <Route path="/*" element={<NotFound/>} />
                    </Routes>
                </div>
                <Divider orientation={'vertical'} className={classes.divider}/>
                { !isMobileSize && <LeftSide/>}
            </TwitteProvider>
            </LayoutProvider>
        </div>
    );
}

export default Layout;
