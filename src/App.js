import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
// import Settings from "./components/Settings/Settings";
import FieldContainer from "./components/Field/FieldContainer";


function App() {
  return (
    <div className="App">
          <Header/>
          <FieldContainer/>
          {/*<Settings/>*/}
    </div>
  );
}

export default App;
