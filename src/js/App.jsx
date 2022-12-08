import React from 'react';
import { useRoutes } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import PropTypes from 'prop-types';
import { ErrorBoundary, ThemeChanger } from './components';
import routes from './constants/routes';
import Theme from './constants/theme';

function App(props) {
  const { dark } = props;

  return (
    <ThemeProvider theme={Theme(dark)}>
      <div className={`theme  + ${dark ? 'theme--dark' : 'theme--default'}`}>
        <div id="base">
          <ThemeChanger />
          <div id="container">
            <ErrorBoundary>{useRoutes(routes)}</ErrorBoundary>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  dark: state.theme.dark,
});

App.propTypes = {
  dark: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
