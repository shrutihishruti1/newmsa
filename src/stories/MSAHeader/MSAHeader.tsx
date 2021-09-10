import React, { useEffect, useState } from "react";
import { Story, Meta } from '@storybook/react';
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Avatar, createStyles, Drawer, Hidden, IconButton, makeStyles, Theme, Toolbar } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { Sidebar } from "../Sidebar/Sidebar";
import { useHistory, useLocation } from "react-router-dom";
import { Self_self } from "../../api/__generated__/Self";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../api/mutations";
import Logo from '@material-ui/icons/NotificationsPaused';

// export default function MSAHeader() {
//     const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   })
// );
// const [sidebar, setSidebar] = useState(false);
//     const classes = useStyles();

//     const toggleSideBar = () => {
//         setSidebar(!sidebar);
//     };


// return (
//     <div className={classes.root}>
//       <AppBar position="static">
//                 <Toolbar>
//                     <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu"
//                         onClick={toggleSideBar}>
//                         <MenuIcon />
//                         <Drawer anchor="left" open={sidebar} onClose={toggleSideBar}>
//                             <Sidebar />
//                         </Drawer>
//                     </IconButton>
//           <Typography className={classes.title} variant="h6">
//             Talent Buzz!
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  export interface MSAHeaderProps {
    user?: Self_self;
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      appBar: {
        backgroundColor: "#5c2d91",
        minHeight: "65px",
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        marginRight: "200px",
      },
      inputRoot: {
        color: "inherit",
      },
      userInformation: {
        display: "flex",
        marginLeft: "20px",
      },
      flexEnd: {
        justifyContent: "flex-end",
        alignItems: "center",
        display: "flex",
      },
    })
  );
  export interface Login_login_viewer {
    __typename: "Viewer";
    id: string;
    name: string;
    gitHub: string;
    imageURI: string;
  }
  
  export interface Login_login {
    __typename: "LoginPayload";
    student: Login_login_viewer;
    jwt: string;
  }
  
  export interface Login {
    login: Login_login;
  }
  
  export interface LoginVariables {
    code: string;
  }
  
  const CLIENT_ID = "9f9e324f49b35c884874";
  const REDIRECT_URI = "http://localhost:3000/home";
  
  
  export const MSAHeader: React.FC<MSAHeaderProps> = ({ user }) => {
    const history = useHistory()
    const classes = useStyles();
    const [sidebar, setSidebar] = useState(false);
  
    const query = useQuery();
  
    const toggleSideBar = () => {
      setSidebar(!sidebar);
    };
  
    const [login] = useMutation<Login>(LOGIN);
  
    useEffect(() => {
      const loginMethod = async () => {
        const code = query.get("code");
        if (code != null) {
          try {
            const { data } = await login({ variables: { code } });
            if (data != null) {
              localStorage.setItem("token", data.login.jwt)
            }
          } catch (e) {
            console.log(e);
          }
          history.push('/home');
        }
      };
      loginMethod();
    }, []);
  
  
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleSideBar}
            >
              <MenuIcon />
              <Drawer anchor="left" open={sidebar} onClose={toggleSideBar}>
                <Sidebar user={user} />
              </Drawer>
            </IconButton>
            <IconButton href="/home">
            <Logo>Logo</Logo>
            </IconButton>
            <Typography className={classes.title} variant="h5" noWrap>
              Talent Buzz!
            </Typography>
            {user == null ? (
              <Button
                color="inherit"
                href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
              >
                Login
              </Button>
            ) : (
              <div className={classes.userInformation}>
                <Hidden smDown>
                  <Avatar alt="user-avatar" src={user.imageURI} />
                  <Button color="inherit" href="/submit">{user.name}</Button>
                </Hidden>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  };