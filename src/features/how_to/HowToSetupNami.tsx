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




export function ViewNFT() {
  const [wasm, setWasm] = useState<any>({})

  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  

  useEffect(() => {

     

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
            {nft.nftName}
            <br/>
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
            Other users nfts
            <br/>
            Other nfts inthis cateogry
            <br/>
            Buy
           </>
        )}
    </>
  );
}
