import React from 'react';
import styles from './AllSongs.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const AllSongs=()=>{
const playAudio=()=> {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
    }
   return(
       <div className={styles.square}>
            {playAudio()}
            <audio className="audio-element">
                <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
            </audio>

       </div>
   ) 
}
export default AllSongs;