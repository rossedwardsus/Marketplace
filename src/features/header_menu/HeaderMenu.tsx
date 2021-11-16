import React, { useState } from 'react';

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

import { Link } from "react-router-dom";

export function HeaderMenu() {
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  return (
    <div style={{width: "100%", height: "10%"}}>
          Loggedin/logged out/localStorage.getItem() - Header Menu/<Link to={"/user/items/new"}>Add Item</Link>/<Link to={"/user/nfts"}>My items</Link>/<Link to={"/nft/browse"}>browse-items</Link><Link to="/signup">Signup</Link><Link to="/user/settings">Settings</Link>/feed
    </div>
  );
}
