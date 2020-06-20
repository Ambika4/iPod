import React from 'react';
import styles from './menu.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Menu=()=>{
   return(
       <div className={styles.square}>
        <ul >
            <li className={styles.active}>CoverFlow</li>
            <li>Games</li>
            <li>Music</li>
            <li>Setting</li>
        </ul>

       </div>
   )
}
export default Menu;