import React from 'react';
import './App.css';
import Settings from './components/settings.jsx';
import Keywords from './components/keywords.jsx';
import Sites from './components/sites.jsx';

function App() {
  return (
    <div className="App">
      <div className='component-containter' id='Keywords'>
        <Keywords />
      </div>
      <div className='component-containter' id='Sites'>
        <Sites  />
      </div>
      <div className='component-containter' id='Settings'>
        <Settings />
      </div>

    </div>
  );
}

export default App;
