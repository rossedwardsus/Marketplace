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

export function User() {
  const {userId} = useParams<any>();
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

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
        {userId}
        <br/>
        Your Nfts
        <br/>
        About me
        <br/>
        About my nfts
        <br/>
        Total number of nfts added
        <br/>
        Total views
        <br/>
        Total likes
        <br/>
        Nft Ranking
        <br/>
        My highest rated nfts
        <br/>
        My most viewed
        <br/>
         {[{id: 12345, userid: "", blockchain_public_address: "", username: "12345", description: "", cost: "", category: "", link: "", likes: "", rating: "", added_datetime: "", nftName: "nftName"}, {nftName: "nftName"}].map((nft: any) =>
          <>
          <br/>
            {nft.nftName}
            <br/>
            <Link to={"/nft" + nft.id}>{nft.title}</Link>
            <br/>
            <br/>
            image/link to view nft
            <br/>
            description
            <br/>
            Category
            <br/>
            Cost
            <br/>
            Purchase
            <br/>
            Rating
            <br/>
            Likes
            <br/>
            Views
           </>
        )}
    </>
  );
}
