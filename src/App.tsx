import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Home } from './features/home/Home';
import { BrowseNfts } from './features/browse_nfts/BrowseNfts';
import { AddNFT } from './features/add_nft/AddNft';
import { HeaderMenu } from './features/header_menu/HeaderMenu';

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
            </div>
            <div style={{width: "30%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
              here
              <Switch>
                  <Route path="/home" exact component={Home} />
                    <Route path="/nft/browse" exact component={BrowseNfts} />
                   <Route path="/nft/new" exact component={AddNFT} />
                </Switch>
              
            </div>
          </div>
     </Router>
  );
}

export default App;
