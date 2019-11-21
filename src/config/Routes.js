import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from '../components/Splash/Splash';
// import Profile from '../components/Profile/Profile';
// import City from '../components/City/City';
// import Post from '../components/Post/Post';

export default () => (
  <Switch>
    <Route exact path="/" component={Splash} />
    {/* <Route path="/users/:id" component={Profile} /> */}
    {/* <Route path="/cities/:cityId" component={City} />
    <Route path="/posts/:postId" component={Post} /> */}
  </Switch>
)