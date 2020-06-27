import React from 'react';
import styles from '../ipod.module.css'; 
import 'font-awesome/css/font-awesome.min.css';


const Menu=(props)=>{
  
    //diassociating the props 
   const {showGames,showMusic,showSetting}=props;
   return(
       <div className={styles.screen}>
        <ul >
            {/* if games,music,setting will false ,set active coverflow else who will be true*/}
            <li  className={(showGames||showMusic||showSetting)?"":styles.active} >CoverFlow</li>
            <li  className={showGames?styles.active:""}>Games</li>
            <li  className={showMusic?styles.active:""}>Music</li>
            <li  className={showSetting?styles.active:""}>Setting</li>
        </ul>
       </div>
       
   )
    }
export default Menu;