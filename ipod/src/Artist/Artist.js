import React from 'react';
import styles from './Artist.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Artist=()=>{
 
   return(
       <div className={styles.square}>
        <ul className="list" >
            <li>Sonu Nigam</li>
            <li >Joe Jones</li>
            <li >Arjit Singh</li>
            <li >Taylor Swift</li>
        </ul>

       </div>
    )
}
export default Artist;