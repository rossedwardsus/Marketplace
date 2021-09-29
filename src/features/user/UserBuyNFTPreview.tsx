import React, { useState, useEffect, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'

//import { useAppSelector, useAppDispatch } from '../../../app/hooks';
/*import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';*/

//import { HeaderMenu } from '../../header_menu/HeaderMenu';

import { Link as RRLink, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'

import {DropzoneArea} from 'material-ui-dropzone'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  smDropzone: {
    maxHeight: 0,
    height: "0%",
    width: 50
  },
});

export function BuyNFTPreview() {
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  const classes = useStyles();
  const params = useParams();
  const [fileAdded, setFileAdded] = useState<any>(false);


  //const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    //<li key={file.path}>
    //  {file.path} - {file.size} bytes
    //</li>
  //}, [])
  const {acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive} = useDropzone({accept: 'image/jpeg, image/png'})

  const acceptedFileItems = acceptedFiles.map(file => {}//(
    //<li key={file.path}>
    //  {file.path} - {file.size} bytes
    //</li>
  //)
  );

  useEffect(() => {

      //loadWasm();

  }, []);

  const handleChange = (files: any) => {
    //this.setState({
    //  files: files
    //});
    alert("here");
  }

  return (
    <>
        <div style={{width: "100%", height: "100%", borderWidth: "5px", borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
            <div style={{width: "20%", height: "100%",borderWidth: 1, borderStyle: "solid", float:"left", display: "inline-block"}}>
              <br/>
              if user is logged in/not logged in
              <br/>
              <br/>
              <Link href="#" underline="none">Link</Link>
              <br/>
              <br/>
              <nav>
                <ul>
                <li><RRLink to="/user/settings">Settings</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/user/notifications">Notifications</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/user/nfts">My NFT</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/user/nfts/add">Add NFT</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/user/chats">Chats user 1</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/home">Chats user 2</RRLink></li>
              </ul>
              </nav>
              <br/>
            </div>
            <div style={{width: "60%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
                      
            <br/>
              Buy NFT
              <br/>
              Image
              <br/>
              Title
              <br/>
              <br/>
              NFT cost - $10
              <br/>
              NIFTGen fee - $1
              <br/>
              Your total comes to $11
               <br/>
              <Button>Buy</Button>
        </div>
       </div>
    </>
  );
}
