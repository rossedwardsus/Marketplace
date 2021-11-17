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

import miami_beach from '../../Miami_Beach_Marina.jpg'


import { Link, useParams } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export function BrowseItemsByCategory() {
  //const [wasm, setWasm] = useState<any>({})
  const { category } = useParams<any>()

  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/


  const handleChange = (event: any) => {
    //setAge(event.target.value);
  };

  useEffect(() => {

      //if ("cardano" in window == false){
      //    <>please install nami</>}
      //}else{
      //    setCardano(window.cardano);
      //}


  }, []);

  return (
    <>
      <div style={{width: "100%", height: "150%", borderWidth: "0", borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
          <div style={{width: "20%", height: "100%",borderWidth: 0, borderStyle: "solid", float:"left", display: "inline-block"}}>
            <br/>
            <nav>
              <ul>
                <li><Link to="/home">Settings</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">Notifications</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">My Items</Link></li>
              </ul>
              <ul>
                <li><Link to="/home">Add Item</Link></li>
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
          <div style={{width: "60%", height: "100%", borderWidth: 0, borderStyle: "solid", display: "inline-block"}}>
         
          <br/>
            <br/>
            hello/browse by category
            <br/>
            sports/art{category}
            <br/>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Link to="/nfts/browse/art" style={{ textDecoration: 'none' }}>Furniture</Link> 
              </Grid>
              <Grid item xs={2}>
                <Link to="/nfts/browse/sports" style={{ textDecoration: 'none' }}>Sports Equipment</Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="/nfts/browse/misc" style={{ textDecoration: 'none' }}>Clothes</Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="/nfts/browse/collectable" style={{ textDecoration: 'none' }}>Appliances</Link>
              </Grid>
            </Grid>
            <br/>
            <FormControl style={{width: 100}}>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"age"}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>All</MenuItem>
              </Select>
            </FormControl>
            <br/>
            <br/>
            <div>
             {[{"nftName": "nftName1"}, {"nftName": "nftName2"}].map((nft: any, index: any) =>
               <>
               <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <br/>
                    <Card>
                      <br/>
                      <CardMedia
                          component="img"
                          sx={{ height: 200, width: 200 }}
                          image={miami_beach}
                          alt="NFT Image"
                        />
                     </Card>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h5">
                            <Link to="/items/1234" style={{ textDecoration: 'none' }}>title{index+1}</Link>
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            <Link to="/users/1234" style={{ textDecoration: 'none' }}>username{index+1}</Link>
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Price
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Category
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            <Link to="/user/chats/1234" style={{ textDecoration: 'none' }}>Message User</Link>
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            tbd
                          </Typography>
                        </CardContent>
                      </Box>
                </Box>
                <br/>
                <br/>
                <br/>
                </>
              )}
          </div>
         </div>
       </div>
    </>
  );
}

//<div style={{display: "grid", gridTemplateRows: "repeat(4, '100px')", gridTemplateColumns: "repeat(3, '1fr')"}}>
//<div style={{gridColumn: index+1 + "/" + index+1}}>
           
