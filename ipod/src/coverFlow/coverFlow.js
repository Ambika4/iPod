import React from 'react';
import styles from '../ipod.module.css'; 
import 'font-awesome/css/font-awesome.min.css';

const coverFlow=()=>{
  
   return(
     //screen for coverflow
       <div className={styles.screen}>
       <img 
       alt="coverFlow"
       src="https://i.insider.com/5273e2a669bedd7c06afe99f?width=1100&format=jpeg&auto=webp" 
      />

       </div>
   ) 
}
export default coverFlow;