import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Home } from './features/home/Home';

import { HeaderMenu } from './features/header_menu/HeaderMenu';

import { BrowseNfts } from './features/browse_nfts/BrowseNfts';
import { ViewNFT } from './features/view_nft/ViewNft';

import { AddNFT } from './features/user/user_add_nft/AddNft';
import { User } from './features/user/UserNfts';

import Gallery from './Gallery_light_background.png';
import Marketplace from './Marketplace_light_background.png';

import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
     <Router>
         <div style={{width: "100%", height: "100%", borderWidth: "5px", borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
            <HeaderMenu/>
            <div style={{width: "30%", height: "100%",borderWidth: 1, borderStyle: "solid", float:"left", display: "inline-block"}}>
              left menu
              <br/>
              <nav>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                </ul>
              </nav>
              <br/>
              <a href="/user/nfts"><img height="5%" width="5%" src={Gallery}/></a><Link to="/user/nfts" style={{color: "#000000", textDecoration: "none"}}>User Nfts</Link>
              <br/>
              <a href="/nfts"><img height="5%" width="5%" src={Gallery}/></a><Link to="/nfts" style={{color: "#000000", textDecoration: "none"}}>Browse Nfts</Link>
              <br/>
              <a href="/marketplace"><img height="5%" width="5%" src={Marketplace}/></a><Link to="/Marketplace" style={{color: "#000000", textDecoration: "none"}}>Marketplace</Link>
            </div>
            <div style={{width: "30%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
              here
              <Switch>
                  <Route path="/home" exact component={Home} />
                  <Route path="/nfts/:nftId" exact component={ViewNFT} />
                  <Route path="/nfts" exact component={BrowseNfts} />
                  <Route path="/user/nfts/new" exact component={AddNFT} />
                  <Route path="/users/:username" exact component={User} />
              </Switch>
              
            </div>
          </div>
     </Router>
  );
}

export default App;
