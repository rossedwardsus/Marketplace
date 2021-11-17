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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';

import SidebarMenu from '../menus/SidebarMenu';

import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

import {
  useMutation,
  gql
} from "@apollo/client";

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
    //nftName: z.string().nonempty('Name Requiredz'),
    //nftName: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    //  message: "Expected number, received a string"
    //}),
    //nftDescription: z.string().min(1, 'Descriptionz Requiredz'),
    itemDescription: z.string().nonempty('Descriptionz Requiredz'),
    //nftDescription: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    //  message: "Expected number, received a string"
    //}),
    price: z.number().min(1),
    //price: z.string().nonempty('Descriptionz Requiredz'),
});

/*schema.safeParse(data, {
  errorMap: (error, _ctx) => {
    if (error.code === z.ZodErrorCode.invalid_type) {
      if (error.expected === 'string') {
        return {message: 'custom message for invalid string'};
      }
    }
    return defaultErrorMap(error, _ctx);
  }
});*/


//mutation name and response
const ADD_NFT_MUTATION = gql`
  mutation AddNFT($name: String, $description: String){
    addNFT(name: $name, description: $description){
      name
      description
    }
  }
` 

export function UserAddItem(props: any): any {
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  const classes = useStyles();
  const params = useParams();
  const [files, setFiles] = useState<any>([]);
  const [fileAdded, setFileAdded] = useState<any>(false);
  const [description, setDescription] = useState<any>(false);
  const [titleDisabled, setTitleDisabled] = useState(false);
  const [descriptionDisabled, setDescriptionDisabled] = useState(false);
  const [priceDisabled, setPriceDisabled] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [addNFT] = useMutation(ADD_NFT_MUTATION);
  const [selectedPriceOrBestoffer, setSelectedPriceOrBestOffer] = useState("");
  
  //addTodo(
  //       {
  //         variables: {todo: todoInput, isPublic }
  //       }
  //     );


  //const name = z.string({
  //  required_error: "Name is required",
  //  invalid_type_error: "Name must be a string",
  //});

  //const [createNFT] = useMutation(ADD_NFT, {
  //  onCompleted(data) {
  //    confirm(data);
  //  }
  //});

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedCategories(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };




  const { handleSubmit, reset, control, formState } = useForm<any>({
    resolver: zodResolver(schema),
    mode: "all", 
    defaultValues: {
      itemTitle: "",
      checkbox: false
    }
  });

  const onSubmit = (data: any) => alert(JSON.stringify(data));

  //var formData = new FormData();
  //formData.append('file', files[0]);

  //fetch('http://server.com/api/upload', {
  //  method: 'POST',
  //  body: formData
  //})

  const onSubmit1 = handleSubmit((data) => {
    alert(JSON.stringify(data))

    //also file
    //axios.post('https://us-central1-savings-club-tracker.cloudfunctions.net/plaid', { name: 'name', description: 'description', price: 'price' })
    //      .then((res) => {
    //          //alert(JSON.stringify(res.data.link_token));
    //          setLinkToken(res.data.link_token);
    //       });

    //addNFT({ variables: { name: name, description: description, price: price }})

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
        setTitleDisabled(false);
        setDescriptionDisabled(false);
        setPriceDisabled(false);
        setSubmitDisabled(false);

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


  const changePriceOrBestOffer = (e: any) => {

      setSelectedPriceOrBestOffer(e.target.value);

  }

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
              <SidebarMenu/>
            </div>
            <div style={{width: "60%", height: "100%", borderWidth: 1, borderStyle: "solid", display: "inline-block"}}>
                      
            <br/>
              Add Item
              <br/>
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
              Item Title(50 characters)
              <br/>
              <Controller
                name="itemTitle"
                control={control}
                render={({ field, formState }) => (
                  
                      <FormControl style={{minWidth: 420}}>
                          <InputLabel id="demo-simple-select-label"></InputLabel> 
                          <TextField
                              {...field}
                              onChange={field.onChange}
                              error={!!formState.errors?.nftName}
                              disabled={titleDisabled}
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
              Item Description {description.length == null ? <>(200 characters left)</> : <>({200 - description.length} characters left)</>}
              <br/>
              <Controller
                name="itemDescription"
                control={control}
                render={({ field, fieldState, formState }) => (
                    <FormControl style={{minWidth: 420}}>
                      <InputLabel id="demo-simple-select-label"></InputLabel>
                      <TextField
                          {...field}
                          label="Description"
                          multiline
                          rows={4}
                          error={!!formState.errors?.nftDescription}
                          disabled={descriptionDisabled}
                          />
                      {JSON.stringify(formState.errors)}{JSON.stringify(fieldState)}
                    </FormControl>
                )}
                defaultValue=""
              />
              <br/>
              <br/>
              Item Category {description.length == null ? <>(200 characters left)</> : <>({200 - description.length} characters left)</>}
              <br/>
              <FormControl style={{minWidth: 420}}>
               <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  multiple
                  value={selectedCategories}
                  onChange={handleChange}
                  input={<OutlinedInput id="select-multiple-chip" />}
                  renderValue={(selected: any) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value: any) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  <MenuItem value={"furniture"}>Furniture</MenuItem>
                  <MenuItem value={"music"}>Clothing</MenuItem>
                  <MenuItem value={"sports_equipment"}>Sports Equipment</MenuItem>
                  <MenuItem value={"collectables"}>Collectables</MenuItem>
                </Select>
              </FormControl>
              
              <br/>
              <br/>
              Select a Shipping option (Buyer has to pickup/I will ship to the buyer-buyer has to pay){description.length == null ? <>(200 characters left)</> : <>({200 - description.length} characters left)</>}
              <br/>
              <FormControl style={{minWidth: 420}}>
               <InputLabel id="demo-simple-select-label">Shipping</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  multiple
                  value={selectedCategories}
                  onChange={handleChange}
                  input={<OutlinedInput id="select-multiple-chip" />}
                  renderValue={(selected: any) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value: any) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  <MenuItem value={"local_only"}>Local Only/Pickup</MenuItem>
                  <MenuItem value={"delivery"}>Delivery</MenuItem>
                  <MenuItem value={"Sports"}>Local and delivery</MenuItem>
                  <MenuItem value={"Collectable"}>Collectable</MenuItem>
                </Select>
              </FormControl>
              <br/>
              <Typography>
                Price or Donation(Make price 0 for donation)(Min 1)/Make an offer- venmo - cash
              </Typography>
              <br/>
              <FormControl component="fieldset">
                <FormLabel component="legend">Price or Best Offer</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={changePriceOrBestOffer}
                >
                  <FormControlLabel value="price" control={<Radio />} label="Price" />
                  <FormControlLabel value="best_offer" control={<Radio />} label="Best Offer" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              <br/>
              {selectedPriceOrBestoffer == "price" &&
                  <Controller
                    name="price"
                    control={control}
                    rules={{ required: "Price required" }}
                    render={({ field, formState }) => (
                      
                        <FormControl style={{width: 120}}>
                            <InputLabel id="demo-simple-select-label"></InputLabel> 
                            <TextField
                                onChange={(e) => field.onChange(parseInt(e.target.value))}
                                label="Price"
                                error={!!formState.errors?.price}
                                disabled={priceDisabled}
                                inputRef={field.ref}
                                />
                            {JSON.stringify(formState.errors)}
                        </FormControl>
                    )}
                  />
              }
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
                    You total cost of.
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
              <Button onClick={handleClickOpen} disabled={submitDisabled}>Mint!</Button>
              <Button type="submit" disabled={titleDisabled}>Submit!</Button>
              <input type="submit" />
        </div>
       </div>
      </form>
    </>
  );
}
