import React from 'react';
import Twitte from './Twitte';
import useStyles from '../styles';

const TwiteeList = ({data}) => {
    const classes=useStyles()
    
    return (
        <div>
            {data.length === 0 && <div className={classes.noAnyTwitte}>این کاربر توییتی ندارد!  </div>}
            {data.map((item,i)=><Twitte key={i}  data={item}/>)}
            
        </div>
    );
}

export default React.memo(TwiteeList);
