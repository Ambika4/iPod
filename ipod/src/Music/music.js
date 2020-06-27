import React from 'react';
import styles from '../ipod.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Music=(props)=>{ 
    
   return(
    <div className={styles.screen}>
      <ul>
          <li  id="AllSongs" className={(props.showArtist||props.showAlbums)?" ":styles.active} >AllSongs</li>
          <li id="Artist" className={props.showArtist?styles.active:" "}>Artist</li>
          <li id="Albums"className={props.showAlbums?styles.active:" "}>Albums</li>
          
      </ul>

     </div>
   )
    }
export default Music;