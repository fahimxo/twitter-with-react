import React from 'react';
import useStyles from './styles';

const NotFound = () => {
    const classes=useStyles()
    return (
        <div className={classes.notFound} style={{backgroundImage:'url(/images/404.jpg)'}}>
            <h1>!PAGE NOT FOUND</h1>
            <h1>404 </h1>
          
        </div> 
    );
}

export default NotFound;
