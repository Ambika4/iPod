import React from 'react';
import styles from './Albums.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Albums=()=>{
 
   return(
       <div className={styles.square}>
        <ul className="list" >
            <li>Happiness Begins</li>
            <li >Reputation</li>
            <li >1989</li>
            <li >Fearless</li>
        </ul>

       </div>
    )
}
export default Albums;