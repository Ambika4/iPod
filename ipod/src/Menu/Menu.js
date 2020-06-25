import React from 'react';
import styles from './menu.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Menu=(props)=>{
  
    
   const {showCoverflow,showGames,showMusic,showSetting}=props;
//    console.log(props);

  const setActiveClass=()=>{

       
        var CoverFlow = document.getElementById("coverFlow");
        var games = document.getElementById("games");
        var Music = document.getElementById("Music");
        var Setting= document.getElementById("Setting");
        if(showCoverflow===true)
        {
        CoverFlow.className=styles.active;
        games.className=" ";
        Music.className=" ";
        Setting.className=" ";
        }
        if(showGames===true)
        {
        games.className=styles.active;
        CoverFlow.className=" ";
        Music.className=" ";
        Setting.className=" ";
        }
        if(showMusic===true)
        {
        Music.className=styles.active;
        games.className=" ";
        CoverFlow.className=" ";
        Setting.className=" ";
        }
        
        if(showSetting===true)
        {
            console.log(Setting);
        Setting.className=styles.active;
        Music.className=" ";
        games.className=" ";
        CoverFlow.className=" ";
        }
   }
   
   return(
       <div className={styles.square}>
        <ul className="list" >
            <li id="coverFlow" className={styles.active} >CoverFlow</li>
            <li id="games">Games</li>
            <li id="Music">Music</li>
            <li id="Setting">Setting</li>
        </ul>
        {setActiveClass()}
       </div>
       
   )
    }
export default Menu;