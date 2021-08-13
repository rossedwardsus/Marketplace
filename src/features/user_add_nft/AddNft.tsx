import React, { useState, useEffect, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'

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



export function AddNFT() {
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

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


  const loadWasm = async () => {
    try {
      const wasm = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');
      //this.setState({wasm});
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  //loadWasm = () => {

  //    const S = import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js')

  //}

  useEffect(() => {

      loadWasm();

  }, []);

  return (
    <>
        <br/>
          AddNFT
          <br/>
          {"cardano" in window == false && <>please install nami</>}
          <br/>
          {JSON.stringify(params)}
          <br/>
          Upload image
          <br/>
          <ul>af{acceptedFileItems.length}</ul>
          <br/>
          <br/>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
          </div>
          <br/>
          title
          <br/>
          description
          <br/>
          <textarea></textarea>
          <br/>
          <br/>
          Category
          <br/>
          <select>
            <option>Art</option>
          </select>
          <br/>
          <br/>
          Price
          <br/>
          <br/>
          Wallet login required
          <br/>
          Activate only if file added and description and category and price
          <button>Add</button>
    </>
  );
}
