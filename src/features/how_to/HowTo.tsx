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




export function HowTo() {
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
      hello/browse by category
      <br/>
      howto  
    </>
  );
}
