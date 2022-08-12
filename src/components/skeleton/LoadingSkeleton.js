import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';
import useStyles from './style';

const LoadingSkeleton = () => {
    const classes=useStyles()
    return (
        <div className={classes.TwitteItem}>
        <Grid container >
        <Skeleton animation="wave" variant="circle" width={50} height={50} />
        <Skeleton animation="wave" className={classes.skeletonText} height={14} width="30%" />
        </Grid>
        <Skeleton animation="wave" variant="text" height={50} />
        <Grid container direction='row-reverse' alignItems='center' style={{gap:'1rem'}}>
        <Skeleton animation="wave" variant="circle" width={40} height={40} />
        <Skeleton animation="wave" variant="circle" width={40} height={40} />
        <Skeleton animation="wave" height={10} width="20%" />
        </Grid>
        </div>
    );
}

export default LoadingSkeleton;
