import React from 'react';
import Wheel from './Wheel/wheel';
import Menu from './Menu/Menu';
import ZingTouch from "zingtouch/src/ZingTouch";
import CoverFlow from './coverFlow/coverFlow';
import Games from './Games/Games';
import Setting from './setting/Setting';
import Music from './Music/music'

class App extends React.Component{
  constructor(){
    super();
    this.state={
        showMenu:true,
        showCoverflow:false,
        showGames:false,
        showMusic:false,
        showSetting:false,
        showAllSongs:false,
        showArtist:false,
        showAlbums:false
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
      //condition for showMenu
      if(value.state.showMenu===true){
        if(currentAngle%60<=15)
        {
        // console.log(value.showGames);
          value.state.showGames=false;
          value.state.showCoverflow=true;
          value.state.showSetting=false;
          value.state.showMusic=false;
          
        }else if(currentAngle%60>15 && currentAngle%60<=30)
        {
          //music:true
          value.state.showGames=true;
          value.state.showCoverflow=false;
          value.state.showSetting=false;
          value.state.showMusic=false;
        
        }else if(currentAngle%60<=45 && currentAngle%60>30)
        {
          value.state.showGames=false;
          value.state.showCoverflow=false;
          value.state.showSetting=false;
          value.state.showMusic=true;
          
        }else{
          
          
          value.state.showGames=false;
          value.state.showCoverflow=false;
          value.state.showSetting=true;
          value.state.showMusic=false;
          
        }
      }
      if(value.state.showMusic===true){
        if(currentAngle%45<=15)
        {
        // console.log(value.showGames);
          value.state.showAllSongs=true;
          value.state.showArtist=false;
          value.state.showAlbums=false;
 
        }else if(currentAngle%45>15 && currentAngle%45<=30){
          value.state.showAllSongs=false;
          value.state.showArtist=true;
          value.state.showAlbums=false;
        }else{
          value.state.showAllSongs=false;
          value.state.showArtist=false;
          value.state.showAlbums=true;
        }
      }
    });
    
    //the value of var value is lost but inside the region.bind  it is working
    this.setState({
      showCoverflow:value.state.showCoverflow,
      showGames:value.state.showGames,
      showMusic:value.state.showMusic,
      showSetting:value.state.showSetting,
      showAllSongs:value.state.showAllSongs,
      showAlbums:value.state.showAlbums,
      showArtist:value.state.showArtist
    })
  
  return currentAngle;
  
}

handleSelectMenuItem=()=>{
  if(this.state.showMenu===false){
    this.setState({
      showMenu:true
    })
  }
  else{
    this.setState({
      showMenu:false
    })
  }
}

render(){
  const {showMenu,showCoverflow,showGames,showMusic,showSetting,showAllSongs,showArtist,showAlbums}=this.state;
  return (

        <div className="App">
          {(false?
          <Menu
         
          showCoverflow={showCoverflow}
          showGames={showGames}
          showMusic={showMusic}
          showSetting={showSetting}/>
          :(showCoverflow?<CoverFlow/>
          :(showGames?<Games/>
          :(showSetting?<Setting/>
          :<Music
           showAllSongs={showAllSongs}
           showArtist={showArtist}
           showAlbums={showAlbums}
          />))))}
          <Wheel 
          onRotating={this.rotateWheel}
          onSelectMenuItem={this.handleSelectMenuItem}/>
        </div>
      );
  }
}
export default App;
