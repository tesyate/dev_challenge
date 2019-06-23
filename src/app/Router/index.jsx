import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from 'app/utils/ScrollToTop';
import { MainLayout } from 'ui/layouts/';
import routes from './routes';

class Router extends React.PureComponent {

  render() {
    return (
      <ScrollToTop>
        <MainLayout>
          <Switch>
            {routes.map((route, indx) => (
              <Route {...route} key={indx} />
            ))}
          </Switch>
        </MainLayout>
      </ScrollToTop>
    );
  }
}

export default Router;
