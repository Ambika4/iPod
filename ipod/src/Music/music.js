import React from 'react';
import styles from './music.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Music=(props)=>{ 
    const {showAllsongs,showArtist,showAlbum}=props;
    const setActiveClass=()=>{
       
       
        var AllSongs = document.getElementById("AllSongs");
        var Artist = document.getElementById("Artist");
        var Album = document.getElementById("Album");
       
        if(showAllsongs===true)
        {
        AllSongs.className=styles.active;
        Artist.className=" ";
        Album.className=" ";
       
        }
        if(showArtist===true)
        {
            AllSongs.className=" ";
            Artist.className=styles.active;
            Album.className=" ";
        }
        if(showAlbum===true)
        {
            AllSongs.className=" ";
            Artist.className=" ";
            Album.className=styles.active;
        }
        
      
   }
   return(
    <div className={styles.square}>{
       setActiveClass()
     }
      <ul className="list" >
          <li  id="AllSongs" className={styles.active} >AllSongs</li>
          <li id="Artist">Artist</li>
          <li id="Albums">Albums</li>
          
      </ul>

     </div>
   )
    }
export default Music;