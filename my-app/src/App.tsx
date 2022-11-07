import React from 'react';

import './App.scss'
import Header from './component/header/Header';

const App: React.FC = () => {

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">

      </div>

    </div>

  );
};

export default App;