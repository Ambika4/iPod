import React from 'react';
import Wheel from './Wheel/wheel';
import Menu from './Menu/Menu';
import ZingTouch from "zingtouch/src/ZingTouch";

class App extends React.Component{
  constructor(){
    super();
    this.state={
        showMenu:false,
        showCoverflow:false,
        showGames:false,
        showMusic:false,
        showSetting:false
      //show
        
    }
}
 rotateWheel=(e)=>{
  
  var currentAngle=0;
    
    var target = document.getElementById('wheel-square-id');
    var region = new ZingTouch.Region(e.target);
    
    var value= this;
   
    region.bind(e.target, 'rotate', function(e) {
    //   var rotatable = document.getElementById('rotatable');
      currentAngle = e.detail.distanceFromOrigin;
      console.log(currentAngle);
      if(currentAngle%360>90)
      {
       
       // console.log(value.showGames);
         value.state.showGames=true;
         value.state.showCoverflow=false;
         value.state.showSetting=false;
         value.state.showMusic=false;
        
      }else if(currentAngle%360>180)
      {
        //music:true
        
        value.state.showGames=true;
         value.state.showCoverflow=false;
         value.state.showSetting=false;
         value.state.showMusic=true;
       
      }else if(currentAngle%360>270)
      {
       
        
        value.state.showGames=true;
        value.state.showCoverflow=false;
        value.state.showSetting=true;
        value.state.showMusic=false;
         
      }else{
        
        
        value.state.showGames=true;
        value.state.showCoverflow=true;
        value.state.showSetting=false;
        value.state.showMusic=false;
        
      }
     
    });
    // console.log(value.state);
    //the value of var value is lost but inside the region.bind  it is working
    this.setState({
      showCoverflow:value.state.showCoverflow,
      showGames:value.state.showGames,
      showMusic:value.state.showMusic,
      showSetting:value.state.showSetting
    })
   console.log("this.state",this.state);
  return currentAngle;
  
}

render(){
  const {currentAngle}=this.state;
  return (
        <div className="App">
          <Menu currentAngle={currentAngle} />
          <Wheel 
          onRotating={this.rotateWheel}/>
        </div>
      );
  }
}
export default App;
