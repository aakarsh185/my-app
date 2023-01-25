// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1000)
  }
  const toggleM=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been enabled","success")
      document.title="TextUtils - Light Mode";
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark Mode has been enabled","success");
      document.title="TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title="TextUtils is amazing";
      // },4000)
      // setInterval(()=>{
      //   document.title="Download TextUtils"
      // },1500)
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="MyTextUtils" home="Home" aboutText="About" contact="Contact Us" mode={mode} toggleMode={toggleM}/>
      {/* <Navbar/> if nothing is specified then values will be used from default*/}
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm show={showalert} heading="Enter Your Text to Analyze Below" text="Enter Your Text" mode={mode} />
          {/* </Route> */}
      {/* </Switch> */}
      </div>
      {/* <About /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
