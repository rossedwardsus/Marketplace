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

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
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


import { Link, useParams, useHistory } from "react-router-dom";

//import { HeaderMenu } from '../header_menu/HeaderMenu';
import SidebarMenu from '../menus/SidebarMenu';

import miami_beach from '../../Miami_Beach_Marina.jpg'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export function UserHome() {
  const {userId} = useParams<any>();
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const hist

  const incrementValue = Number(incrementAmount) || 0;*/

  const history = useHistory();


  //useEffect(() => {

  //    loadWasm();

  //}, []);

  return (
    <>
        <div style={{width: "100%", height: "100%", borderWidth: "5px", borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
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
                <li><Link to="/user/nfts">My Items</Link></li>
              </ul>
              <ul>
                <li><Link to="/user/nfts/add">Add Item</Link></li>
              </ul>
              <ul>
                <li><Link to="/user/chats">Chats user 1</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">Chats user 2</Link></li>
              </ul>
              </nav>
              <br/>
              <SidebarMenu />
              <br/>
            </div>
            <div style={{width: "60%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
            Welcome USer1!
            <br/>
            {userId}
            <br/>
            Feed
            <br/>
            Your for sale items
            <br/>
            Your requested items
            <br/>
            if user is logged in/not logged in
             <br/>
            Edit profile
            <br/>
            Notifications
            <br/>
            Chats
            <br/>
            chat - User1
            <br/>
            Users items trying to purchase
            <br/>
            <br/>
            <br/>
            Users Items for sale- views - messages
            <br/>
             {[{id: 12345, userid: "", username: "12345", description: "", cost: "", category: "", link: "", likes: "", rating: "", added_datetime: "", nftName: "nftName"}, {nftName: "nftName"}].map((nft: any, index: any) =>
              <>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <br/>
                    <Card sx={{ display: 'flex' }}>
                      <br/>
                       <div className="cardWrapper" onClick={() => history.push("/user/items/1")}>
                            
                            <CardMedia
                              component="img"
                              sx={{ width: 151 }}
                              image={miami_beach}
                              alt="NFT Image"
                            />

                        </div>
                    </Card>

                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h5">
                            Title<Link to="/users/1234">username{index+1}</Link>
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            username
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Image
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Description
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Category
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Price
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Edit
                          </Typography>
                        </CardContent>
                      </Box>
                </Box>
              
               </>
            )}
           </div>
           About user
        </div>
    </>
  );
}
