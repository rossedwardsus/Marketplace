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

import { Link } from "react-router-dom";


export function BrowseNFTs() {
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
        hello/browse by category
        <br/>
        <div style={{display: "grid", gridTemplateRows: "repeat(4, '100px')", gridTemplateColumns: "repeat(3, '1fr')"}}>
          {[{"nftName": "nftName1"}, {"nftName": "nftName2"}].map((nft: any, index: any) =>
           <div style={{gridColumn: index+1 + "/" + index+1}}>
                <br/>
                  username{index+1}
                  <br/>
                  {nft.nftName}
                  <br/>
                  <Link to={"/nfts/1234"}>policyid</Link>
                  <br/>
                  ipfs link
                  <br/>
              </div>
          )}
      </div>
    </>
  );
}
