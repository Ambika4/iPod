import React from 'react';
import styles from './music.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Music=()=>{ 
   return(
    <div className={styles.square}>{
       
     }
      <ul className="list" >
          <li  id="coverFlow" className={styles.active} >AllSongs</li>
          <li id="games">Artist</li>
          <li id="Music">Albums</li>
          
      </ul>

     </div>
   )
    }
export default Music;