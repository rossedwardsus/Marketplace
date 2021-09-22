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

import { Link, useParams, useHistory } from "react-router-dom";

import { HeaderMenu } from '../header_menu/HeaderMenu';

export function Signup() {
  const {userId} = useParams<any>();
  const history = useHistory<any>();
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  const gotoSettings = () => {

      history.push("/user/settings");

  }

  return (
    <>
        email
        <br/>
        password
        <br/>
        <br/>
        <button onClick={() => gotoSettings()}>Sign Up</button>
    </>
  );
}
