import React, { useContext } from 'react';
import { Grid, IconButton, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import useStyle from './styles' 
import MenuIcon from '@material-ui/icons/Menu';
import { layoutDispatchContext, toggleDrawer } from '../../context/layoutContext';

const Header = ({title,icon}) => {
    const classes=useStyle()
    const dispatch = useContext(layoutDispatchContext);
    const theme =useTheme()
    const isTabletSize = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid container className={classes.header}>
            {isTabletSize && 
            <IconButton className={classes.iconbtn} onClick={()=>{toggleDrawer(dispatch)}}>
                <MenuIcon className={classes.menuIcon}/> 
                </IconButton> }
            <div>{icon}</div>
            <Typography className={classes.headerTitle}>{title}</Typography>  
        </Grid>
    );
}

export default Header;
