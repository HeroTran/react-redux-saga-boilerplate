import React from 'react';
import i18n from '../../i18n';
import './home.scss';

const Home = (props) => {
  return (
    <div className="wrapper-home">
      <h1>Welcome you !</h1>
      <p>{i18n.t('common.about')}</p>
    </div>
  );
};

export default Home;
