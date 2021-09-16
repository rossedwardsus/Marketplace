import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

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




export function ViewNFT() {
  const [wasm, setWasm] = useState<any>({})
  const { nftId } = useParams<any>();

  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  const loadWasm = async () => {
    try {
      const wasm = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');
      setWasm({wasm});
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  //loadWasm = () => {

  //    const S = import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js')

  //}

  useEffect(() => {

      loadWasm();

      //if ("cardano" in window == false){
      //    <>please install nami</>}
      //}else{
      //    setCardano(window.cardano);
      //}


  }, []);

  return (
    <>
      <br/>
      {"cardano" in window == false && <>please install nami</>}
      <br/>
      hello/browse by category{nftId}
        {[{nftName: "nftName"}].map((nft: any) =>
          <>
          <br/>
            user
            <br/>
            {nft.nftName}
            <br/>
            image/link to view nft on cardano explorer
            <br/>
            description
            <br/>
            Category
            <br/>
            Transaction History
            <br/>
            Likes
            <br/>
            Rating
            <br/>
            Views
            <br/>
            Similar nfts
            <br/>
            Other nfts from this user
           </>
        )}
    </>
  );
}
