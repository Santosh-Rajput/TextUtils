
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


 
function App() {
  const [mode, setMode] = useState('light'); 
  
  const [alert, setAlert] = useState(null); 

  const blue = ()=>{
    if (mode==="light"||mode==="black") {
      if(mode === 'light'){
        setMode('black');
        document.body.style.backgroundColor = '#3700ff';
        showAlert("Blue-Black mode","success")
        document.title='TextUtlis-Dark Mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Normal","success")
        document.title='TextUtlis-Home ';
        
      }
    }
 }
  const wine = ()=>{
    if (mode==="light"||mode==="black") {
      if(mode === 'light'){
        setMode('black');
        document.body.style.backgroundColor = '#7a0000';
        showAlert("Dark Red-Black mode ","success")
        document.title='TextUtlis-Dark Mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Noramal","success")
        document.title='TextUtlis-Home ';
        
      }
    }
 }

 

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout((showAlert) => {
          setAlert(null);
        }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('black');
      document.body.style.backgroundColor = '#0f031c';
      showAlert("Dark mode has been enable","success")
      document.title='TextUtlis-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success")
      document.title='TextUtlis-Home ';
      
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} blue= {blue} wine={wine} />
    <Alert alert={alert}/> 
    <div className="container my-3">

    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
        
          </Route>
        </Switch> */}
        {/* </Router> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </> 
  );
}

export default App;