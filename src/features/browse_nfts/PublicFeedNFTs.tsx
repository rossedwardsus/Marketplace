import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
/*import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';*/

import { HeaderMenu } from '../header_menu/HeaderMenu';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';


import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export function PublicFeedNFTs() {
  const [wasm, setWasm] = useState<any>({})

  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  const loadWasm = async () => {
    try {
      const wasm = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');
      setWasm({wasm});
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  //loadWasm = () => {

  //    const S = import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js')

  //}

  const handleChange = (event: any) => {
    //setAge(event.target.value);
  };

  useEffect(() => {

      loadWasm();

      //if ("cardano" in window == false){
      //    <>please install nami</>}
      //}else{
      //    setCardano(window.cardano);
      //}


  }, []);

  return (
    <>
      <div style={{width: "100%", height: "100%", borderWidth: "5px", borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
          <div style={{width: "20%", height: "100%",borderWidth: 1, borderStyle: "solid", float:"left", display: "inline-block"}}>
            <br/>
            <nav>
              <ul>
                <li><Link to="/home">Settings</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">Notifications</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">My NFT</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">Add NFT</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">Chats user 1</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">Chats user 2</Link></li>
              </ul>
            </nav>
            <br/>
          </div>
          <div style={{width: "60%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
         
          <br/>
            {"algorand" in window == false && <>please install algorand wallet</>}
            <br/>
            hello/browse by category
            <br/>
            sports/art
            <br/>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Link to="/nfts/browse/art" component={Button}>Art</Link> 
              </Grid>
              <Grid item xs={2}>
                <Item>Sports</Item>
              </Grid>
              <Grid item xs={2}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item xs={2}>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
            <br/>
            filter by for sale or not
            <br/>
            <select>
              <option>All NFTs</option>
              <option>NFTs Fr SALE</option>
              <option>Just Being Collected</option>
            </select>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"age"}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>All</MenuItem>
                <MenuItem value={20}>For Sale</MenuItem>
                <MenuItem value={30}>Being Collected</MenuItem>
              </Select>
            </FormControl>
            <div>
             {[{"nftName": "nftName1"}, {"nftName": "nftName2"}].map((nft: any, index: any) =>
               <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <br/>
                    <Card sx={{ display: 'flex' }}>
                      <br/>
                      <CardMedia
                          component="img"
                          sx={{ width: 151 }}
                          image="/static/images/cards/live-from-space.jpg"
                          alt="NFT Image"
                        />
                     </Card>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h5">
                            Nft Name<Link to="/nfts/1234">nft{index+1}</Link>
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Username<Link to="/users/1234">username{index+1}</Link>
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            IPFS Address
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Aseet ID
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Message
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            For Sale/Collected
                          </Typography>
                        </CardContent>
                       
                      </Box>

                      
                      <br/>
                      {nft.nftName}
                      <br/>
                      <Link to={"/nfts/1234"}>algorand assetidid</Link>
                      <br/>
                      <img height="100" width="100"></img>
                      ipfs link
                      <br/>
                      rating 5/5
                      <br/>
                      Comments 10
                      <br/>
                      views
                      <br/>
                      share
                      <br/>
                      message
                      <br/>
                      For sale
                      <br/>
                </Box>
              )}
          </div>
         </div>
       </div>
    </>
  );
}

//<div style={{display: "grid", gridTemplateRows: "repeat(4, '100px')", gridTemplateColumns: "repeat(3, '1fr')"}}>
//<div style={{gridColumn: index+1 + "/" + index+1}}>
           
