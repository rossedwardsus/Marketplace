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

//import { HeaderMenu } from '../header_menu/HeaderMenu';

import { Link, useParams, useHistory } from "react-router-dom";

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

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
//import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import MessageIcon from '@mui/icons-material/Message';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CollectionsIcon from '@mui/icons-material/Collections';

import { makeStyles } from '@material-ui/core/styles';

import miami_beach from '../../Miami_Beach_Marina.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


const itemData = [
    {
      itemId: 1,
      img: miami_beach,
      title: 'item1',
      user: 'user1',
    },
    {
      img: miami_beach,
      title: 'item1',
      user: 'user1',
    },
  ];

export function UserItem() {
  const classes = useStyles();
  const { itemId } = useParams<any>();
  const history = useHistory();
  const [item, setItem] = useState({itemId: 1, userId: 1, itemTitle: "it", itemDescription: "id", shippingOption: "set", price_option: "set", price: 10});

  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/


  useEffect(() => {



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
              <br/>
              View Item
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
                          item Name<Link to="/users/1234">username</Link>
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Username
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
                          Item Description
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Location
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Delivery - Local only/Delivery
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
                            Furniture
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Box>
                  </Box>   
                    <br/>
                    <Button onClick={() => history.push("/items/" + item.itemId)}>Update</Button>
                    <br/>
                     messages
                     <br/>
                     offers
                   </div>
           </div>
      </div>
     </>
  );
}
