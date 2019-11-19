import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";

export default function SideDrawer({ closeDrawer, onClose }) {
  return (
    <Drawer anchor="right" open={closeDrawer} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => console.log("nav-items")}>
          <Link to="/" className="text-uppercase link text-dark">
            Home
          </Link>
        </ListItem>
        <ListItem button onClick={() => console.log("nav-items2")}>
          <Link to="/register" className="text-uppercase link text-dark">
            Register
          </Link>
        </ListItem>
        <ListItem button onClick={() => console.log("nav-items3")}>
          <Link to="/login" className="text-uppercase link text-dark">
            Login
          </Link>
        </ListItem>
        <ListItem button onClick={() => console.log("nav-items4")}>
          <Link to="/rooms" className="text-uppercase  link text-dark">
            Rooms
          </Link>
        </ListItem>
        <ListItem button onClick={() => console.log("nav-items5")}>
          <Link to="/rooms/:slug" className="text-uppercase link text-dark">
            Featured Rooms
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
