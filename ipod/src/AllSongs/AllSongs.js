import React from 'react';
import styles from '../ipod.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const AllSongs=()=>{

   return(
       //screen for song list
       <div className={styles.screen}>
            <ul  >
            <li>Sucker</li>
            <li >Cool</li>
            <li >Chote chote Peg</li>
            <li >22</li>
        </ul> 

       </div>
   ) 
}
export default AllSongs;