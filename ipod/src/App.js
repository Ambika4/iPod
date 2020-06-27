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
    
  //taking target as div element of wheel
    var target = document.getElementById('wheel-square-id');
    //using Zing touch for rotation
    var region = new ZingTouch.Region(e.target);
    

    //As this will be lost inside region.bind function so assigning it to other var 
    var value= this;
   
    region.bind(e.target, 'rotate', function(e) {
      currentAngle = e.detail.distanceFromOrigin;
    
      //taking abs value 
      currentAngle=Math.abs(currentAngle);
     
      //if showMenu will be true then only change the menu items
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
      //if showMusic will be true then change item inside Music
    else{
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
    
    //setting state for rerendering elements after rotation
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

//function for handling state showMenu 
handleShowMenu=()=>{

  //if not inside Music Menu then only set true Main Menu
  if(this.state.showMusicMenu===false){
    this.setState({
      showMusicMenu:true
    })
  }//if inside Music Menu thenset true Music Menu true
  else{
    this.setState({
      showMenu:true

    })
  }
}
//function for showing Menu items
handleShowItem=()=>{
  //if inside Music Menu then need to set false MusicMenu ,so that, can see Music items
  if(this.state.showMusic===true && this.state.showMenu===false)
  {
    this.setState({
      showMusicMenu:false
    })
  }
  //any condition showMenu will be false while seeing items
  this.setState({
    showMenu:false
  })
}

render(){
  
  return (
    
    <div className={styles.container}>
      <div className={styles.phonecase}> 	
        <div className={styles.phonetop}>
          <div className={styles.camera}></div>
        </div>
       
        <div className="App">
        {/* using ternary operator to decide which component should render basis of they are true */}
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
           {/* in all case wheel will be visible */}
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
