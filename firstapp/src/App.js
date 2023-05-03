import { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Intro2 from './components/Intro2';
import Intro1 from './components/Intro1';
import Nav from './components/Nav';
import Promo from './components/Promo';
import mkp from './components/managingStatewithinComponent';
import ReactPlayer from 'react-player/youtube'
import InputComponent from './components/usingHooks';
function Heading() {
  return (<h1>This is an h1 heading</h1>)
}

function App() {
  return ( 
    <div className="App"> 
      This is the starting code for "Your first component" ungraded lab 
      <Heading /> 
      <MyVideo/>
      <Nav/>
      <Promo/>
      <Intro2/>
      <Intro1/>
      <Footer/>
      
      <mkp/>
      {/* <InputComponent/> */}

{/* How to add Sound file  */}
    <button onClick={toggle1}>Caspian Tern1</button>
    <button onClick={toggle2}>Caspian Tern2</button>
    </div> 
    
  ); 
} 
const MyVideo=()=>{
  return(
    <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    playing={false}
    volume={0.1}
    seek
    />
  );
};
/* How to add Sound file  */
const bird1=new Audio("https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3");
const bird2=new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3");

function toggle1() {
  if (bird1.paused)
  {
    bird1.play();
  }else
  {
    bird1.pause();
  }
};

function toggle2() {
  if (bird2.paused)
  {
    bird2.play();
  }else
  {
    bird2.pause();
  }
};



export default App;

