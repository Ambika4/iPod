import React from 'react';
import styles from '../ipod.module.css'; 
import 'font-awesome/css/font-awesome.min.css';
//import ZingTouch from "zingtouch/src/ZingTouch";

const Wheel=(props)=>{
    
    const handleOnClick=(e)=>{
        
      //onSelectMenuItem();
       props.onRotating(e);
    }
    const handleOnClickMenu=(e)=>{
     
        props.onSelectMenu()
    }
    const handleOnClickItem=(e)=>{
     
      props.onSelectItem()
  }
      return(
          
      
  <div onClick={handleOnClick}className={styles.button}>
				<div onClick={handleOnClickMenu} className={styles.menu}>MENU</div>
				
				<div className={styles.next} >
					<i className="fa fa-fast-forward" aria-hidden="true"></i>
				</div>
				
				<div className={styles.pause}>
					<i className="fa fa-play" aria-hidden="true"></i>
					<i className="fa fa-pause" aria-hidden="true"></i>
				</div>

				<div className={styles.prev}>
					<i className="fa fa-fast-backward" aria-hidden="true"></i>
				</div>
		    	<div onClick={handleOnClickItem} className={styles.innerbutton}></div>
		    </div>
  )
}
export default Wheel;