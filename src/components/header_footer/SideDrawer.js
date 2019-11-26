import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";


export default function SideDrawer({ closeDrawer, onClose }) {

  
  return (
    <Drawer anchor="right" open={closeDrawer} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button>
          <Link to="/" className="text-uppercase link text-dark">
            Home
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/register" className="text-uppercase link text-dark">
            Register
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/login" className="text-uppercase link text-dark">
            Login
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/rooms" className="text-uppercase  link text-dark">
            apartments
          </Link>
        </ListItem>
        
      </List>
    </Drawer>
  );
}
