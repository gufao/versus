import React, { useEffect } from "react";
import { Route, withRouter, useHistory } from "react-router-dom";
import { useAuth } from "../../auth";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, user, token } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (loading || token) {
      return;
    }

    const redirectToLogin = () => {
      history.replace('/login');
    }
    redirectToLogin();
  }, [loading, user, token, history]);

  const render = props =>
    token ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

export default withRouter(PrivateRoute);
