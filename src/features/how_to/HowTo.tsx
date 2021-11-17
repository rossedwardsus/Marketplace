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

//import { HeaderMenu } from '../header_menu/HeaderMenu';

import { Link as RRLink, useParams } from "react-router-dom";

import Link from '@mui/material/Link';



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
      <div style={{width: "100%", height: "300%", borderWidth: 0, borderStyle: "solid", position: "absolute", overflow: "hidden"}}>
            <div style={{width: "20%", height: "100%",borderWidth: 0, borderStyle: "solid", float:"left", display: "inline-block"}}>
              <br/>
              if user is logged in/not logged in
              <br/>
              <br/>
              <Link href="#" underline="none">Link</Link>
              <br/>
              <br/>
              <nav>
                <ul>
                <li><RRLink to="/user/settings">Settings</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/user/notifications">Notifications</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/user/nfts">My NFT</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/user/nfts/add">Add NFT</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/user/chats">Chats user 1</RRLink></li>
              </ul>
              <ul>
                <li><RRLink to="/home">Chats user 2</RRLink></li>
              </ul>
              </nav>
              <br/>
            </div>
            <div style={{width: "60%", height: "100%", borderWidth: 0, borderStyle: "solid", display: "inline-block"}}>
          
            <br/>
            {"cardano" in window == false && <>please install algosign</>}
            <br/>
            hello/browse by category
            <br/>
            howto  
            <br/>
<p>
<strong>Guide: Welcome to Niftgen</strong>
</p>
<p>
Welcome to Niftgen! We are a next generation NFT platform that provides a new and better way for you to build and monetize your brand. If you want to know why Niftgen is the NFT platform you should be using, click here. 
</p>
<p>
We prepared this guide to make it easy for you to know what non-fungible tokens (NFT’s) are, and how you can get started on using the platform. 
</p>
<p>
<strong>Non-fungible tokens </strong>are unique, digital items with blockchain-managed ownership. Examples include collectibles, game items, digital art, event tickets, domain names, and even ownership records for physical assets.  Using Niftgen, you can create, buy, sell, and explore assets across several categories. You can also give comments and ratings to the NFT’s you see to provide feedback to the owners. User interaction is a big component of this platform.  By the end of this article, you’ll have the knowledge and skills to effortlessly move through the world of NFT’s. 
</p>
<h1><strong>Getting Started</strong></h1>


<p>
Perhaps you’ve discovered a blockchain game you want to play, and you need some NFTs to get started.  Maybe you’ve spotted a piece of digital art that you just can’t live without.  Or you want to buy virtual real state and invite your friends to see it.  Maybe you just want to see what all the hype is about.  Whatever your reason, we’re here to help you get started on the right foot.
</p>
<p>
<br/>The first thing you’ll need is a wallet.  In the brave new world of <a href="https://blog.coinbase.com/understanding-web-3-a-user-controlled-internet-a39c21cf83f3">web 3</a>, a wallet is not just a folded piece of leather where you store your credit cards and paper money.  In this context, a wallet still stores your digital money, but it also handles your identity, your credentials, and more.  Not only does it manage access to the items you own, it allows you to broadcast transactions to the blockchain.  In other words, a wallet is a tool you add to your browser to interact with the blockchain. 
</p>
<p>
<br/><strong>Why do you need a wallet?</strong>  Because Niftgen itself is another tool you use to interact with the blockchain.  Niftgen provides a system for peer-to-peer exchanges.  Since you’ll be using Niftgen to interact directly with others on the blockchain, you’ll need a wallet to help you turn your actions in the browser into transactions on the blockchain.
</p>
<p>
<strong>A few quick notes on terminology: </strong>
</p>
<p>
A<strong> <span style={{textDecoration: "underline"}}>wallet i</span></strong>s a complex tool that, among other things, helps you create and manage addresses.  
</p>
<p>
An <strong><span style={{textDecoration: "underline"}}>address</span></strong> is a 42-character <a href="https://en.wikipedia.org/wiki/Hexadecimal">hexadecimal</a> <a href="https://en.wikipedia.org/wiki/String_(computer_science)">string</a> that roughly corresponds to a unique location in the Algorand network.  Your Algorand address serves a similar function to your email address in the PayPal context. 
</p>
<p>
<br/>A <strong><span style={{textDecoration: "underline"}}>Niftgen account</span></strong> is a bundle of supplemental information, stored on Niftgen’s traditional servers, attached to an address.  Key takeaway: you don’t store NFTs <em>in</em> your Niftgen account.  They’re owned by an address on the blockchain.  You, in turn, own the address by exclusively controlling your private key or seed phrase (see paragraph below).  An Niftgen account just provides a bright and cheerful lens to view the cold, binary reality of the blockchain.
</p>
<p>
<strong>What are your private and public keys?</strong>
</p>
<p>
Let’s use this analogy: 
</p>
<p>
A private key is your Gmail password. 
</p>
<p>
A public key is your email address. 
</p>
<p>
Everyone can see your email address (public key) and they require it to send you mail. When you send mail, they will see it has been delivered from your email address. However, only you know your Gmail password (private key). This gives you power to send emails and read emails sent to you. Email addresses and passwords exist in pairs like this (justin@fakeland.com;123456) where each email address can only have one corresponding password and vice versa. What is a secret recovery phrase?
</p>
<p>
Secret recovery phrase – Your secret recovery phrase is a list of words that can be used to recover your crypto should you forget your password or lose access to your wallet. When you first begin trading with your wallet, find your secret recovery phrase and back it up somewhere safe, in multiple locations
</p>
<h1><strong>Choosing Your Wallet</strong></h1>


<p>
Lots of skilled teams are working to build different wallets.  They all serve the same purpose, but each one takes a different approach and has different tradeoffs. Since every blockchain is different, each have them owns unique wallet. For example, to interact with applications built on the Ethereum blockchain, you need to have what is called a MetaMaks wallet. It's important to note that blockchain wallets are specific for their respective blockchain and cannot be used to interact with other applications on other blockchains.  For example, the ethereum MetaMask wallet cannot be used to interact with Niftgen because it is an application built on the Algorand blockchain.  
</p>
<p>
For Niftgen, you will need to have the My Algo wallet. Check out this <a href="https://www.youtube.com/watch?v=7EqA0aNxs0s">My Algo Wallet Introduction Video </a>to get a sense of the installation process.  It only takes a few minutes to install.
</p>
<p>
Once you’ve got your wallet set up, it’s time to hook it up to Niftgen.  Watch this <span style={{textDecoration: "underline"}}>video</span>on how to do it. Once you’ve got your wallet unlocked, you’ll be able to see your assets (if you already own some) in your wallet on your Niftgen account page.  Now that your wallet and Niftgen are linked, you’ll need to get some ALGO to pay for gas and items.
</p>
<h1><strong>Getting ALGO</strong></h1>


<p>
Another quick digression into terminology: Algorand is the whole blockchain system, ALGO is the native currency of the Algorand blockchain. You use ALGO as money to pay for gas. For now, you can only use ALGO to purchase items on any platform that is built on the ALGO blockchain. However, we plan to provide the option for users to purchase NFT’s by simply using their credit cards. 
</p>
<p>
Gas fees are a bit of a tricky concept.  The gas cost is the amount of work that goes into something, like the number of hours of labor, whereas the gas price is like the hourly wage you pay for the work to be done. The combination of the two determines your total transaction fee.”  Bottom line: you need ALGO to pay for some of your interactions with the blockchain and to pay for the items you buy. 
</p>
<p>
Don’t worry that gas fees will break the bank, though.  Most actions on Niftgen only cost a few cents if they cost anything at all.
</p>
<p>
So, where can you buy ALGO?
</p>
<p>
<strong><a href="https://www.coinbase.com/price/algorand">Coinbase</a></strong> – One of the top 2 exchanges in the business.  Most people who want to turn their fiat currency into cryptocurrencies turn to Coinbase. You will have the option to “buy Algorand” to purchase ALGO’s. You should have some ALGO within a few days.
</p>
<p>
<strong><a href="https://www.kraken.com">Kraken</a></strong> – The second biggest exchange in the business. It’s the main competitor of Coinbase and many users use it to turn their fiat currency to cryptocurrency. Click <a href="https://www.kraken.com/en-us/learn/buy-algorand-algo">here</a> to get started. 
</p>


        </div>
      </div>
    </>
  );
}
