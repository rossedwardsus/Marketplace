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

import { Link, useParams } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import MessageIcon from '@mui/icons-material/Message';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CollectionsIcon from '@mui/icons-material/Collections';

import miami_beach from '../../Miami_Beach_Marina.jpg'

export function ViewNFT() {
  const [wasm, setWasm] = useState<any>({})
  const { nftId } = useParams<any>();

  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  //const loadWasm = async () => {
  //  try {
  //    const wasm = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');
  //    setWasm({wasm});
  //  } catch(err) {
  //    console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
  //  }
  //};

  //loadWasm = () => {

  //    const S = import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js')

  //}

  useEffect(() => {

      //loadWasm();

      //if ("cardano" in window == false){
      //    <>please install nami</>}
      //}else{
      //    setCardano(window.cardano);
      //}


  }, []);

  return (
    <>
        <div style={{width: "100%", height: "180%", borderWidth: "5px", borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
            <div style={{width: "20%", height: "100%",borderWidth: 1, borderStyle: "solid", float:"left", display: "inline-block"}}>
              <br/>
              if user is logged in/not logged in
              <nav>
                <ul>
                <li><Link to="/user/settings">Settings</Link></li>
              </ul>
              <ul>
                <li><Link to="/user/notifications">Notifications</Link></li>
              </ul>
              <ul>
                <li><Link to="/user/nfts">My NFT</Link></li>
              </ul>
              <ul>
                <li><Link to="/user/nfts/add">Add NFT</Link></li>
              </ul>
              <ul>
                <li><Link to="/user/chats">Chats user 1</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">Chats user 2</Link></li>
              </ul>
              </nav>
              <br/>
            </div>
            <div style={{width: "60%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
        
              <br/>
              {"cardano" in window == false && <>please install algorand</>}
              <br/>
              View NFT
              <br/>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <br/>
                  <Card sx={{ display: 'flex' }}>
                    <br/>
                    <CardMedia
                        component="img"
                        sx={{ width: 600 }}
                        image={miami_beach}
                        alt="NFT Image"
                      />
                   </Card>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                          Nft Name<Link to="/users/1234">username</Link>
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Username
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          IPFS Address
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Asset ID
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Message User
                        </Typography>
                        <MessageIcon/>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Price
                        </Typography>
                        <AttachMoneyIcon/><CollectionsIcon/>
                         <Typography variant="subtitle1" color="text.secondary" component="div">
                          Tbd
                        </Typography>
                        <Stack>
                          <Rating 
                            name="half-rating" 
                            onChange={() => alert()} 
                            defaultValue={2.5} 
                            precision={0.5} 
                        />
                          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                        <VisibilityIcon/>views
                        <Grid container spacing={2}>
                          <Grid item xs={2}>
                            Art
                          </Grid>
                        </Grid>
                        <Link to={"/nfts/" + nftId + "/buy"} component={Button}>Buy</Link>
                      </CardContent>
                    </Box>
                  </Box>   
                    <br/>
                    Comments<CommentIcon/>
                    <br/>
                    <Stack>
                      <Rating 
                        name="half-rating" 
                        onChange={() => alert()} 
                        defaultValue={2.5} 
                        precision={0.5} 
                    />
                      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </Stack>
                    views
                    <br/>
                    share
                    <br/>
                    <br/>
                    <br/>
                   <FormControl style={{minWidth: 500}}>
                    <InputLabel id="demo-simple-select-label">Add Comment</InputLabel>         
                    <TextField
                      label="Add Comment"
                      multiline
                      rows={4}
                      />
                    </FormControl>
                    <br/>
                    Comments 10
                    <br/>
                    username/Comment Date
                    <br/>
                    <FormControl style={{minWidth: 120}}>
                      <Paper>
                        Wow this is a grat nft!
                      </Paper>
                    </FormControl>
                    <br/>
                    <br/>
                    username/Comment Date
                    <br/>
                    <FormControl style={{minWidth: 120}}>
                      <Paper>
                        Wow this is a great nft!
                      </Paper>
                    </FormControl>
                    <br/>
                    <br/>
                    <Button>Add Comment</Button>        
          </div>
      </div>
     </>
  );
}
