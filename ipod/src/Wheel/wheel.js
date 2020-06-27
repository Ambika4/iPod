import React from 'react';
import styles from '../ipod.module.css'; 
import 'font-awesome/css/font-awesome.min.css';


const Wheel=(props)=>{
    //function for rotation received it via props
    const handleOnClick=(e)=>{
        
      //onSelectMenuItem();
       props.onRotating(e);
    }
    //function to select menu,received it via props
    const handleOnClickMenu=(e)=>{
     
        props.onSelectMenu()
    }
     //function to select items,received it via props
    const handleOnClickItem=(e)=>{
     
      props.onSelectItem()
  }
      return(
          
      
  <div id="wheel-square-id"onClick={handleOnClick}className={styles.button}>
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