import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { SignUp } from './SignUp'
import { SignIn } from './SignIn'

function App() {
  return (
    <div className='container-md wrapper'>
      <div className='content shadow'>
        <div className='row'>
          <Sidebar />
          <BrowserRouter>
            <Switch>
              <Route key='changelog-list' path='/' exact component={SignUp} />
              <Route key='changelog-item' path='/signin' exact component={SignIn} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
