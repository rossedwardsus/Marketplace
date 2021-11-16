import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Home } from './features/home/Home';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { HeaderMenu } from './features/header_menu/HeaderMenu';

import { BrowseItems } from './features/browse_items/BrowseItems';
import { BrowseItemsByCategory } from './features/browse_items/BrowseItemsByCategory';
import { ViewItem } from './features/view_item/ViewItem';
import { BuyItem } from './features/buy_item/BuyItem';

import { Signup } from './features/signup_login/Signup';
import { Login } from './features/signup_login/Login';

import { HowTo } from './features/how_to/HowTo';

import { UserAddItem } from './features/user/UserAddItem';
import { UserHome } from './features/user/UserHome';
import { UserPublic } from './features/user/UserPublic';
import { UserSettings } from './features/user/UserSettings';
import { UserNotifications } from './features/user/UserNotifications';
import { UserChats } from './features/user/UserChats';

import Gallery from './Gallery_light_background.png';
import Marketplace from './Marketplace_light_background.png';

import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
     <Router>
         <AppBar position="static" color="default">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Getridofit
              </Typography>
              <Link to={"/howto"} color="inherit" component={Button}>How To</Link>
              <Link to={"/items/browse"} color="inherit" component={Button}>Browse</Link>
              <Link to={"/user"} color="inherit" component={Button}>User Home</Link>
              <Link to={"/signup"} color="inherit" component={Button}>Sign Up</Link>
              <Link to={"/login"} color="inherit" component={Button}>Login</Link>
              <Link to={"/user/items/add"} color="inherit" component={Button}>Add Item</Link>
            </Toolbar>
          </AppBar>
        
         <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/login" exact component={Login} />
              <Route path="/user" exact component={UserHome} />
              <Route path="/user/chats/:chatId" exact component={UserChats} />
              <Route path="/user/items/add" exact component={UserAddItem} />
              <Route path="/user/notifications" exact component={UserNotifications} />
              <Route path="/user/settings" exact component={UserSettings} />
              <Route path="/user/:userId" exact component={UserPublic} />
              <Route path="/items/browse/:category" exact component={BrowseItemsByCategory} />
              <Route path="/items/browse" exact component={BrowseItems} />
              <Route path="/items/:itemId/buy" exact component={BuyItem} />
              <Route path="/items/:itemId" exact component={ViewItem} />
              <Route path="/howto" exact component={HowTo} />
          </Switch>
              
      
     </Router>
  );
}

export default App;
