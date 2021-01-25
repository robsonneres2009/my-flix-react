import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Header } from './components/header';
import { Home } from './pages/home';
import { Detail } from './pages/detail';

const browserHistory = createBrowserHistory();
export { browserHistory };

export const Routes = () => {

  return <>
    <Header />
    <div className="containerBody">
    <Router history={browserHistory}>
      <Switch>
        <Route path="/detalhes/:id" render={(props)=><Detail id={props?.match?.params?.id}/>}/>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  </> 
}
