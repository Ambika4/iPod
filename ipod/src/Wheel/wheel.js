import React from 'react';
import styles from './wheel.module.css'; 
import 'font-awesome/css/font-awesome.min.css';
//import ZingTouch from "zingtouch/src/ZingTouch";

const Wheel=(props)=>{
    const{onRotating,onSelectMenuItem}=props;
    const handleOnClick=(e)=>{
        
      //onSelectMenuItem();
        onRotating(e);
    }
    const handleOnClickMenuItem=(e)=>{
      console.log("Indise doublle click");
        onSelectMenuItem()
    }
      return(
          
       <div onClick={handleOnClick}className={styles.square}id="wheel-square-id"> 
        
        <div className={styles.toggle}></div>
        <div id="rotatable">
        <div  className={styles.menu}>
          <div><b>Menu</b>
          <button onClick={handleOnClickMenuItem}>Button</button>
           </div>
        
        <div><i  className ="fa fa-fast-forward"  aria-hidden="true"></i></div>
        <div><i className="fa fa-fast-backward" aria-hidden="true"></i></div>
        <div><i className="fa fa-pause-circle-o" aria-hidden="true"></i></div>
       
        </div>
      
        </div>
       
       </div>
  // <div className={styles.button}>
	// 			<div className={styles.menu}>MENU</div>
				
	// 			<div className={styles.next} >
	// 				<i className="fa fa-fast-forward" aria-hidden="true"></i>
	// 			</div>
				
	// 			<div className={styles.pause}>
	// 				<i className="fa fa-play" aria-hidden="true"></i>
	// 				<i className="fa fa-pause" aria-hidden="true"></i>
	// 			</div>

	// 			<div className={styles.prev}>
	// 				<i className="fa fa-fast-backward" aria-hidden="true"></i>
	// 			</div>
	// 	    	<div  className={styles.innerbutton}></div>
	// 	    </div>
  )
}
export default Wheel;