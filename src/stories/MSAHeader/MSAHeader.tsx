import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, createStyles, Drawer, IconButton, makeStyles, Theme, Toolbar } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { Sidebar } from "../Sidebar/Sidebar";
import { useHistory, useLocation } from "react-router-dom";

export default function MSAHeader() {
    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);
const [sidebar, setSidebar] = useState(false);
    const classes = useStyles();

    const toggleSideBar = () => {
        setSidebar(!sidebar);
    };


return (
    <div className={classes.root}>
      <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu"
                        onClick={toggleSideBar}>
                        <MenuIcon />
                        <Drawer anchor="left" open={sidebar} onClose={toggleSideBar}>
                            <Sidebar />
                        </Drawer>
                    </IconButton>
          <Typography className={classes.title} variant="h6">
            Talent Buzz!
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}