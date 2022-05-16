import React from "react";

// import {Route,Switch} from 'react-router-dom';

import Home from './component/Home';
import Nav from './component/Nav';

const App = () => {
  return(
    <>
      {/* <Switch>
        <Route exact path='/' component={About}/>
      </Switch> */}
      <Nav/>
      <Home/>
    </>

  )
}

export default App;