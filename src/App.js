import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import { ReactDOM } from 'react';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, SetMode] = useState('light'); //whether dark mode is Enabel or not




  const[alert,setAlert] =useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
    setAlert(null);
    },1000);
  }

   const changemode=()=>{
    if(mode === 'light'){
      SetMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabeled","success");
      document.title="Text-Analyzer Dark mode  "
 
      // for chaning title
      // setInterval(()=>{
      // document.title="Text-Analyzer is amazing  ";
       
      // },2000)
      // setInterval(()=>{
      // document.title=" install  Text-Analyzer  ";
       
      // },1500)
      
    }
    else{
      SetMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabeled","success");
      document.title="Text-Analyzer light mode  "
      
    }
  }




  return (
    <>
      {/* <Router> */}
      <Navbar title="Text-Analyzer" mode={mode}  changemode={changemode}  />

      <Alert alert={alert} />

      <div className="container" >

      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>  
          <Route path="/">
          </Route>
        </Switch> */}
        <Textform  showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode} />

      {/* <About /> */}
      </div>

      {/* </Router> */}
    </> 
  );
}

export default App;
 
