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

export function SidebarMenu() {
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

  return (
    <div style={{width: "20%", height: "100%",borderWidth: 0, borderStyle: "solid", float:"left", display: "inline-block"}}>
      <br/>
      <nav>
        <ul>
          <li><Link to="/home">Settings</Link></li>
        </ul>
        <ul>
          <li><Link to="/home">Notifications</Link></li>
        </ul>
        <ul>
          <li><Link to="/home">My Items</Link></li>
        </ul>
        <ul>
          <li><Link to="/home">Add Item</Link></li>
        </ul>
        <ul>
          <li><Link to="/home">Chats user 1</Link></li>
        </ul>
        <ul>
          <li><Link to="/home">Chats user 2</Link></li>
        </ul>
      </nav>
      <br/>
    </div>
  );
}
