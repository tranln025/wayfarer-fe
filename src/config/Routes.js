import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from '../components/Splash/Splash';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
// import City from '../components/City/City';
// import Post from '../components/Post/Post';

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path="/"  render={() => <Splash currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
    {/* <Route path="/users/:id" component={Profile} /> */}
    {/* <Route path="/cities/:cityId" component={City} />
    <Route path="/posts/:postId" component={Post} /> */}
  </Switch>
)

// component={Splash}