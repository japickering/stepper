import React from 'react';
import './App.css';
import { defaultMenu, menuTaps, menuAccessories } from './config';
import Stepper from './components/Stepper';

function App() {
  return (
    <div className='App'>
      <h1>Stepper menu</h1>
      <Stepper
        defaultMenu={defaultMenu}
        menuTaps={menuTaps}
        menuAccessories={menuAccessories}
      />
    </div>
  );
}

export default App;
