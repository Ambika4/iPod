import React from 'react';
import styles from '../ipod.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Games=()=>{
  console.log("Inside games")
   return(
       <div className={styles.screen}>
       <img 
       alt="Games"
       src="https://bizimages.withfloats.com/actual/5d1b1e6798df2f0001eb5186.jpg" 
      />

       </div>
   ) 
}
export default Games;