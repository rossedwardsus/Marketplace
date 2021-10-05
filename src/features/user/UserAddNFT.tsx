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

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  smDropzone: {
    maxHeight: 0,
    height: "0%",
    width: 500
  },
  previewChip: {
    minWidth: 1600,
    maxWidth: 2100
  },
});

const schema = z.object({
  name: z.string().nonempty({ message: 'Required' }),
  price: z.number().min(10),
});


export function UserAddNFT(props: any): any {
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  const classes = useStyles();
  const params = useParams();
  const [files, setFiles] = useState<any>([]);
  const [fileAdded, setFileAdded] = useState<any>(false);
  const [description, setDescription] = useState<any>(false);
  const [open, setOpen] = React.useState(false);

   const { handleSubmit, reset, control, formState } = useForm<any>({mode: "onTouched", 
    defaultValues: {
      nftName: "",
      checkbox: false
    }
  });

  const onSubmit = (data: any) => alert(JSON.stringify(data));

  const onSubmit1 = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })

  //const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    //<li key={file.path}>
    //  {file.path} - {file.size} bytes
    //</li>
  //}, [])
  const {acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive} = useDropzone(
    {
      accept: 'image/jpeg, image/png',
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    }
  )

  const acceptedFileItems = acceptedFiles.map(file => {}//(
    //<li key={file.path}>
    //  {file.path} - {file.size} bytes
    //</li>
  //)
  );

  const thumbs = files.map((file: any) => (
    <div key={file.name}>
      <div>
        <img height={300} width={500}
          src={file.preview}
        />
      </div>
    </div>
  ));


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

  useEffect(() => {

      //loadWasm();

  }, []);

  const handleFileChange = (files: any) => {
    //this.setState({
    //  files: files
    //});
    //alert("here");
  }

  const handleDescriptionChange = (e: any) => {

    //alert(e.target.value);
    setDescription(e.target.value);

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{width: "100%", height: "300%", borderWidth: "5px", borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
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
              AddNFT
              <br/>
              {"algorand" in window == false && <>please install algorand</>}
              <br/>
              Upload image
              <br/>
              <ul>af{acceptedFileItems.length}</ul>
              <FormControl style={{maxWidth: 420}}>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop the files here ...</p> :
                      <p>Drag 'n' drop some files here, or click to select files</p>
                  }
                </div>
                <aside>
                  {thumbs}
                </aside>
              </FormControl>
              <br/>
              <FormControl style={{maxWidth: 4200}}>
                  <DropzoneArea
                      showPreviews={false}
                      showPreviewsInDropzone={true}
                      onChange={(files: any) => handleFileChange(files)}
                      classes={{
                        root: classes.smDropzone,
                      }}
                  />
              </FormControl>
              <br/>
              title(50 characters)
              <br/>
              <Controller
                name="nftName"
                control={control}
                rules={{ required: 'First name required' }}
                render={({ field, formState }) => (
                  
                      <FormControl style={{minWidth: 420}}>
                          <InputLabel id="demo-simple-select-label">Title</InputLabel> 
                          <TextField
                              {...field}
                              error={!!formState.errors?.nftName}
                              />
                          {JSON.stringify(formState.errors)}
                      </FormControl>
                )}
                defaultValue=""
                />
              <br/>
              <br/>
              <FormControl style={{minWidth: 120}}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"age"}
                  label="Age"
                  onChange={() => {}}
                >
                  <MenuItem value={20}>For Sale</MenuItem>
                </Select>
              </FormControl>
              <br/>
              description (200 characters left){description.length != null && <>{200 - description.length}</>}
              <br/>
              <FormControl style={{minWidth: 420}}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <TextField
                    label="Description"
                    multiline
                    rows={4}
                    onChange={(e: any) => handleDescriptionChange(e)}
                    />
              </FormControl>
              <br/>
              <textarea></textarea>
              <br/>
              <br/>
              <FormControl style={{minWidth: 420}}>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel> 
                   <FormControl style={{minWidth: 120}}>
                      <InputLabel id="demo-simple-select-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"age"}
                        label="Category"
                        onChange={() => {}}
                      >
                        <MenuItem value={10}>Art</MenuItem>
                        <MenuItem value={20}>Sports</MenuItem>
                        <MenuItem value={30}>Being Collected</MenuItem>
                      </Select>
                    </FormControl>
              </FormControl>
              <br/>
              Price
              <br/>
              <FormControl style={{minWidth: 420}}>
                  <InputLabel id="demo-simple-select-label">Price</InputLabel> 
                  <TextField
                      label="Algos"
                      onChange={() => {}}
                      />
                  <Typography>
                    Algos ($1)
                  </Typography>
              </FormControl>
              <br/>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    You are minting an NFT for a total cost of.
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
              <br/>
              Have popup saying are you sure you want to mint this nft?  Confirn Cancel
               <br/>
              <Button onClick={handleClickOpen}>Mint!</Button>
              <Button type="submit">Submit and Mint!</Button>
              <input type="submit" />
        </div>
       </div>
      </form>
    </>
  );
}
