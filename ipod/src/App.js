import React from 'react';
import Wheel from './Wheel/wheel';
import Menu from './Menu/Menu';
import ZingTouch from "zingtouch/src/ZingTouch";
import CoverFlow from './coverFlow/coverFlow';
import Games from './Games/Games';
import Setting from './setting/Setting';
import Music from './Music/music'
import styles from './ipod.module.css';
import AllSongs from './AllSongs/AllSongs';
import Artist from './Artist/Artist';
import Albums from './Albums/Albums'

class App extends React.Component{
  constructor(){
    super();
    this.state={
        showMenu:true,
        showCoverflow:true,
        showGames:false,
        showMusic:false,
        showSetting:false,
        showAllSongs:false,
        showArtist:false,
        showAlbums:false,
        showMusicMenu:true
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
    
    
      currentAngle=Math.abs(currentAngle);
      console.log(currentAngle)
      if(value.state.showMenu===true){
        if(currentAngle%60>45 && currentAngle%60<60)
        {
        // console.log(value.showGames);
          value.state.showGames=false;
          value.state.showCoverflow=false;
          value.state.showSetting=true;
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
          
        }else if(currentAngle%60>=0 && currentAngle%60<30){
          
          
          value.state.showGames=false;
          value.state.showCoverflow=true;
          value.state.showSetting=false;
          value.state.showMusic=false;
          
        }
      }
      if(value.state.showMusic===true){
        if(currentAngle%45>=0 && currentAngle%45<=15)
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

handleShowMenu=()=>{
  if(this.state.showMusicMenu===false){
    this.setState({
      showMusicMenu:true
    })
  }
  else{
    this.setState({
      showMenu:true

    })
  }
}
handleShowItem=()=>{
  if(this.state.showMusic===true && this.state.showMenu===false)
  {
    this.setState({
      showMusicMenu:false
    })
  }
  this.setState({
    showMenu:false
  })
}

render(){
  
  console.log(this.state)
  return (
    
    <div className={styles.container}>
    <div className={styles.phonecase}> 	
       <div className={styles.phonetop}>
         <div className={styles.camera}></div>
       </div>
       
        <div className="App">
          {(this.state.showMenu?
          <Menu
          showGames={this.state.showGames}
          showMusic={this.state.showMusic}
          showSetting={this.state.showSetting}/>
          :(this.state.showCoverflow?<CoverFlow/>
          :(this.state.showGames?<Games/>
          :(this.state.showSetting?<Setting/>
          :(this.state.showMusicMenu?<Music
            showArtist={this.state.showArtist}
            showAlbums={this.state.showAlbums}
           />
           :(this.state.showAllSongs?<AllSongs/>
           :(this.state.showArtist?<Artist/>
           :<Albums/>)))))))}
          <Wheel 
          onRotating={this.rotateWheel}
          onSelectMenu={this.handleShowMenu}
          onSelectItem={this.handleShowItem}/>
        </div>
        </div>
        </div>
      );
  }
}
export default App;
