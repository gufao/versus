import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { useAuth} from './auth';
import history from './services/history';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Loading from './components/Loading';

function App() {
  const { loading } = useAuth();
  if (loading) {
    return <Loading />
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <PrivateRoute path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
