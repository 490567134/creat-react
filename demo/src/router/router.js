
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('../containers/home'));
const About = lazy(() => import('../containers/about'));
const Menu = lazy(() => import('../containers/menu'));

const RouterConfig = () => {
  return (
    <Suspense fallback={<div>Loading...</div>} >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Suspense >
  )
}
export default RouterConfig