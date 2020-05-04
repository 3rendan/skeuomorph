import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Items from './views/Items';

import { GlobalProvider } from './context/GlobalState'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <GlobalProvider>
      <div className='container'>
      </div>
    </GlobalProvider>
  );
}

export default App;
