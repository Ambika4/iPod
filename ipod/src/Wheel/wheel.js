import React from 'react';
import styles from './wheel.module.css'; 
import 'font-awesome/css/font-awesome.min.css';
import ZingTouch from "zingtouch/src/ZingTouch";

const Wheel=()=>{
  function rotatewheel(e){
    var currentAngle = 15;
    
    var target = document.getElementById('wheel-square-id');
    var region = new ZingTouch.Region(e.target);
   
    region.bind(e.target, 'rotate', function(e) {
    //   var rotatable = document.getElementById('rotatable');
      currentAngle += e.detail.distanceFromLast;
      console.log(currentAngle);
    
    });
    

  }
   return(
       <div onClick={rotatewheel}className="wheel-square"id="wheel-square-id"> 
        
        <div className={styles.toggle}></div>
        <div id="rotatable">
        <div  className={styles.menu}>
        <div>Menu</div>
        <div><i className="fa fa-fast-forward" aria-hidden="true"></i></div>
        <div><i className="fa fa-fast-backward" aria-hidden="true"></i></div>
        <div><i className="fa fa-pause-circle-o" aria-hidden="true"></i></div>
       
        </div>
      
        </div>
       
       </div>
   )
}
export default Wheel;