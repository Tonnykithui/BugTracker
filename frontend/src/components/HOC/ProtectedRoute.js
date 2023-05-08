import React from 'react';
import { Navigate, Route } from 'react-router-dom'

const ProtectedRoute =  (Component, userAuthenticated, ...rest) => {
    if (userAuthenticated) {
      return <Component {...rest} />;
    } else {
      return <Navigate to={{ pathname: '/login', state: { from: rest.location } }} replace />
    }

};

export default ProtectedRoute;