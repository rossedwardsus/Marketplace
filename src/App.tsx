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

import { PublicFeedNFTs } from './features/browse_nfts/PublicFeedNFTs';
import { ViewNFT } from './features/view_nft/ViewNft';
import { BuyNFT } from './features/buy_nft/BuyNft';

import { Signup } from './features/signup/Signup';

import { HowTo } from './features/how_to/HowTo';

import { AddNFT } from './features/user/user_add_nft/AddNft';
import { User } from './features/user/UserNfts';
import { UserSettings } from './features/user/UserSettings';

import Gallery from './Gallery_light_background.png';
import Marketplace from './Marketplace_light_background.png';

import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
     <Router>
         <AppBar position="static">
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
                Niftgen
              </Typography>
              <Link to="/nfts/browse">Public Feed</Link>
              <Button color="inherit">User Feed</Button>
              <Button color="inherit">Signin</Button>
            </Toolbar>
          </AppBar>
        
         <div style={{width: "100%", height: "100%", borderWidth: "5px", borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
            <div style={{width: "20%", height: "100%",borderWidth: 1, borderStyle: "solid", float:"left", display: "inline-block"}}>
              <br/>
              <nav>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                </ul>
              </nav>
              <br/>
            </div>
            <div style={{width: "60%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
              here
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/nfts/browse" exact component={PublicFeedNFTs} />
                  <Route path="/nfts/:nftId" exact component={ViewNFT} />
                  <Route path="/nfts/:nftId/buy" exact component={BuyNFT} />
                  <Route path="/users/:username" exact component={User} />
                  <Route path="/howto" exact component={HowTo} />
                  <Route path="/signup" exact component={Signup} />
                  <Route path="/user/nfts/new" exact component={AddNFT} />
                  <Route path="/user/settings" exact component={UserSettings} />
              </Switch>
              
            </div>
          </div>
     </Router>
  );
}

export default App;
