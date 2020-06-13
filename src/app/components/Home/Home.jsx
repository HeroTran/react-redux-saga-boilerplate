import React from 'react';
import Grid from '@material-ui/core/Grid';
import i18n from '../../i18n';
import './home.scss';

const Home = (props) => {
  return (
    <div className="wrapper-home">
      <h1>Welcome </h1>
      <p>{i18n.t('common.about')}</p>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          Grid1
        </Grid>
        <Grid item xs={12} sm={6}>
          Grid2
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
