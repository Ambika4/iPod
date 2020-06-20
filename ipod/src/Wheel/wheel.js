import React from 'react';
import styles from './wheel.module.css'; 
import 'font-awesome/css/font-awesome.min.css';
//import ZingTouch from "zingtouch/src/ZingTouch";

const Wheel=(props)=>{
    const handleOnClick=(e)=>{
        const{onRotating}=props;
        onRotating(e);
    }
      return(
       <div onClick={handleOnClick}className={styles.square}id="wheel-square-id"> 
        
        <div className={styles.toggle}></div>
        <div id="rotatable">
        <div  className={styles.menu}>
        <div><b>Menu</b></div>
        <div><i  className ="fa fa-fast-forward"  aria-hidden="true"></i></div>
        <div><i className="fa fa-fast-backward" aria-hidden="true"></i></div>
        <div><i className="fa fa-pause-circle-o" aria-hidden="true"></i></div>
       
        </div>
      
        </div>
       
       </div>
   )
}
export default Wheel;