import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Route ,Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children, ...rest }) => {
  const { user , isLoading } = useAuth();
  if(isLoading){
    return <div className = "my-5 py-5"><Spinner animation="border" variant='danger'/></div>
  }
  console.log(user)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
