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

import { Link, useParams } from "react-router-dom";

import { HeaderMenu } from '../header_menu/HeaderMenu';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export function UserChats() {
  const {userId} = useParams<any>();
  const [chats, setChats] = useState<any>([{chatId: 1, chatText: "You:\nI want to find out about this nft\nUser1:\n\tsure"}, {userChattingWith: 2, chat:[{userId: 1, chatMessage: "", chatMessageDateTime: "today"}, {userId: 2, userName: "", chatMessage: "", chatMessageDateTime: "today"}]}]);
  const [newChatMessage, setNewChatMessage] = useState<any>();

  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  //const loadWasm = async () => {
  //  try {
  //    const wasm = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');
      //this.setState({wasm});
  //  } catch(err) {
  //    console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
  //  }
  //};

  //loadWasm = () => {

  //    const S = import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js')

  //}

  //useEffect(() => {

  //    loadWasm();

  //}, []);

  const onNewChatMessageChange = (e: any) => {

      setNewChatMessage(e.target.value);

  } 

  const addChatMessage = () => {

      let chatsTemp = [...chats];
      //alert(JSON.stringify(chats_temp));
      let currentChatIndex = chatsTemp.findIndex((chat: any) => chat.chatId == 1);
      //alert(current_chat_index);
      var chatTextTemp = chatsTemp[currentChatIndex].chatText;
      //chatTextTemp = chatTextTemp + "\n\t\tWhat would you like to know?";
      chatTextTemp = chatTextTemp + "\nYou:\n\t\t" + newChatMessage;
      chatsTemp[currentChatIndex].chatText = chatTextTemp;

      alert(JSON.stringify(chatsTemp));

      setChats(chatsTemp);

  }

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
              <br/>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  user1 has started a chat
                </Grid>
                <Grid item xs={2}>
                  user2
                </Grid>
                <Grid item xs={2}>
                  user3
                </Grid>
                <Grid item xs={2}>
                  user 4
                </Grid>
              </Grid>
              <br/>
              <FormControl style={{maxWidth: 4200}}>
                <TextField
                  style={{height: 300, width: 500}}
                  rows={10}
                  multiline
                  value={chats[0].chatText}
                >
                </TextField>
                <br/>
                <br/>
                <TextField onChange={(e: any) => onNewChatMessageChange(e)} placeholder="Enter Comment"/>
              </FormControl>
              <br/>
              <Button onClick={() => addChatMessage()}>Add</Button>
              
            </div>
         </div>
    </>
  );
}
