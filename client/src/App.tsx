import React, {createContext} from 'react';
import './App.css';
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import {createBrowserHistory} from 'history'
import {ThemeProvider} from '@material-ui/core/styles'
import {ThemeProvider as StyledProvider} from 'styled-components'
import theme from './theme'
import useDimensions from './helpers/responsiveHook'

export const history = createBrowserHistory();

export const DimensionContext = createContext({
  onMobile:true,
  onTablet: false,
  onDesktop:false
});

function App() {
  const dimensions = useDimensions();
  return (
    <ThemeProvider theme = {theme}>
      <StyledProvider theme = {theme}>
        <DimensionContext.Provider value = {dimensions}>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Home}/>
            </Switch>
          </Router>
        </DimensionContext.Provider>
      </StyledProvider>
    </ThemeProvider>
  );
}

export default App;
