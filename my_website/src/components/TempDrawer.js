import React, { useEffect } from "react";
//import { Drawer } from "@mui/material";
//import { Button} from "@mui/material";
//import { Box } from "@mui/material"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Drawer, Button, colors } from "@mui/material";

export default function TempDrawer({DrawerContent, bttnText, anchorTo, backgroundColor}) {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    
    

    return (
      <div>
        <Button variant='contained' onClick={toggleDrawer(true)}>{bttnText}</Button>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor={anchorTo} sx={{color: 'red'}}>
          <Box role='presentation' sx={{backgroundColor: '#333842', padding: '10px'}}>
            {DrawerContent}
            <div style={{padding: '10px'}}>
              <Button variant='contained' onClick={toggleDrawer(false)} sx={{backgroundColor: colors.red[700], '&:hover': {backgroundColor: colors.red[900]}}}>Close Panel</Button>
            </div>
          </Box>
        </Drawer>
      </div>
    );
  }
  