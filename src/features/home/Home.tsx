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

//import { HeaderMenu } from '../header_menu/HeaderMenu';

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
          Welcome to Getridofit
          <br/>
          A few samples
          <br/>
           <br/>
          <Link to={"/howto"}>How To</Link>
          <br/>
          <br/>
          <Link to={"/items/browse"}>Click here to browse</Link>
    </>
  );
}
