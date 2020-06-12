import React from 'react';
import Routes from '../Common/Routes/Routes';
import './app.scss';

const App = (props) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="main-container">
          <Routes />
        </div>
      </div>
    </>
  );
};

export default App;
