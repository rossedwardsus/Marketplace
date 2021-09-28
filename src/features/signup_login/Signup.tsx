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

import { useHistory } from "react-router-dom";

//import { HeaderMenu } from '../header_menu/HeaderMenu';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
//import Link from '@mui/material/Link';

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().nonempty({ message: 'Required' }),
  age: z.number().min(10),
});

export function Signup() {
  //const {userId} = useParams<any>();
  const history = useHistory<any>();
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;*/

 //const { register, handleSubmit, formState:{ errors } } = useForm({
 //  resolver: zodResolver(schema)
 //});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const gotoSettings = () => {

      history.push("/user/settings");

  }

  return (
    <>
        email
        <br/>
        <form onSubmit={handleSubmit((d) => console.log(d))}>
     
            <FormControl style={{minWidth: 420}}>
                <InputLabel id="demo-simple-select-label">Signup</InputLabel> 
                <TextField
                    label="Email"
                    onChange={() => {}}
                    />
            </FormControl>
            password
            <br/>
            <FormControl style={{minWidth: 420}}>
                <InputLabel id="demo-simple-select-label">Login</InputLabel> 
                <TextField
                    label="Multiline"
                    onChange={() => {}}
                    />
            </FormControl>
            <br/>
            <button onClick={() => gotoSettings()}>Sign Up</button>
        </form>
    </>
  );
}
