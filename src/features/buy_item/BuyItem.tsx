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

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export function BuyItem() {
  const [open, setOpen] = useState<any>(false)

  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  

  useEffect(() => {

      //loadWasm();

      //if ("cardano" in window == false){
      //    <>please install nami</>}
      //}else{
      //    setCardano(window.cardano);
      //}


  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{width: "100%", height: "100%", borderWidth: "5px", borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
        <div style={{width: "20%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
        </div>
        <div style={{verticalAlign: "top", width: "60%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
          <br/>
          {"cardano" in window == false && <>please install nami</>}
          <br/>
                Preview your purchase
                <br/>
                <br/>
                nftName
                <br/>
                cost
                <br/>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                      Mint NFT
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        You are minting an NFT for a total cost of.
                        <br/>
                        NFT cost is $10
                        <br/>
                        NiftGen recives $1
                        <br/>
                        Total cost is $11
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleClose} autoFocus>
                        Proceed
                      </Button>
                    </DialogActions>
                </Dialog>
                <br/>
                Have popup confirming cost including niftren fee witha procesd and cancel as well as authorizing the purchase with their wallet.
                <br/>
                <Button onClick={handleClickOpen}>Buy now</Button>
        </div>
      </div>
    </>
  );
}
