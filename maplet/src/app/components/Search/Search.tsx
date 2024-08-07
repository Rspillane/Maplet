import './Search.css';
import Avatar from '../Avatar/Avatar';
import Dialog from '../Dialog/Dialog';
import React from 'react';
import Drawer from '@mui/material/Drawer';

export default function Search() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    return (
    <div className="map-searchbox">
        <input className="Input" type="text" id="searchbox" defaultValue="Search" />
        
            <button onClick={toggleDrawer(true)}>
                <div className='avatar'><Avatar /></div>
            </button>
            <Drawer
                anchor='bottom'
                open={open}
                onClose={toggleDrawer(false)}
            >
                Bottom Drawer
            </Drawer>
    </div>
    );
};