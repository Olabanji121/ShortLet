import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


export default function SideDrawer({closeDrawer, onClose}) {
    return (
        <Drawer
            anchor="right"
            open={closeDrawer}
            onClose={()=> onClose(false)}
        
        >

            <List component="nav">
                <ListItem button onClick={()=>console.log('nav-items')}>
                    Event Starts in 
                </ListItem>
                <ListItem button onClick={()=>console.log('nav-items2')}>
                    Venue Info 
                </ListItem>
                <ListItem button onClick={()=>console.log('nav-items3')}>
                    Highlight 
                </ListItem>
                <ListItem button onClick={()=>console.log('nav-items4')}>
                    Pricing 
                </ListItem>
                <ListItem button onClick={()=>console.log('nav-items5')}>
                    Location 
                </ListItem>

            </List>


        </Drawer>
    )
}
