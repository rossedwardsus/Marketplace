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

import { HeaderMenu } from '../header_menu/HeaderMenu';

import { Link, useParams } from "react-router-dom";

export function Home() {
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  return (
    <>
        <br/>
          Home
          <br/>
          What niftgen is.
          <br/>
          A few samples
          <br/>
          Exaplanationofhow touse niftgen
          <br/>
          <Link to={"/howto"}>How To</Link>
          <br/>
          <br/>
          Also some users of niftgen
          <br/>
          <Link to={"/nfts/browse"}>Click here to browse</Link>
    </>
  );
}
