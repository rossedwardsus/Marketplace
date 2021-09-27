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




export function BuyNFT() {
  const [wasm, setWasm] = useState<any>({})

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
      hello
        {[{nftName: "nftName"}].map((nft: any) =>
          <>
          <br/>
            Preview your purchase
            <br/>
            <br/>
            {nft.nftName}
            <br/>
            cost
            <br/>
            Username
            <br/>
            image
            <br/>
            description
            <br/>
            <br/>
            Categories
            <br/>
            <br/>
            Like this nft/rate this nft
            <br/>
            Make an inquery
            <br/>
            Cost
            <br/>
            Buy now
           </>
        )}
    </>
  );
}
