import React from 'react';
import styles from '../ipod.module.css'; 
import 'font-awesome/css/font-awesome.min.css';


const Menu=(props)=>{
  
    
   const {showGames,showMusic,showSetting}=props;
   return(
       <div className={styles.screen}>
        <ul >
            <li  className={(showGames||showMusic||showSetting)?"":styles.active} >CoverFlow</li>
            <li  className={showGames?styles.active:""}>Games</li>
            <li  className={showMusic?styles.active:""}>Music</li>
            <li  className={showSetting?styles.active:""}>Setting</li>
        </ul>
        {/* {setActiveClass()} */}
       </div>
       
   )
    }
export default Menu;