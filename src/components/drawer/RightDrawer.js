import { Drawer } from '@material-ui/core';
import React, { useContext } from 'react';
import { layoutContext, layoutDispatchContext, toggleDrawer } from '../../context/layoutContext';

import RightSidebar from '../rightSide/RightSidebar';

const RightDrawer = () => {
    const drawerOpen = useContext(layoutContext);
    const dispatch = useContext(layoutDispatchContext);
    return (
        <div>
            <Drawer anchor={'right'} open={drawerOpen} onClose={()=>{toggleDrawer(dispatch)}}>
            <RightSidebar/>
          </Drawer>
        </div>
    );
}

export default RightDrawer;
