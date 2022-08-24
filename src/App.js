import './App.css';
import React, { useState } from 'react'

// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type  
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#191919';
      showAlert("Dark Mode Enabled","success");
      document.title="TextUtils - Dark Mode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
      document.title="TextUtils - Light Mode";
    }
  };

  return (
    <>
    <Navbar title="TextUtils" search="Def_Search" mode={mode} toggleMode={toggleMode}/>
    {/* If No props are been provided default will get Executed! */}

    <Alert alert={alert}/>
    <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </div>
    {/* <About/> */}
   </>
  );
}

export default App; 