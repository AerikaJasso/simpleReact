// Higher Order Component(HOC) - A component(HOC)that renders another component (Regular Component).
// Goal of HOC is to reuese code. 
// With HOC we will be able to :
  // Reuse code.
  // Render Hijacking.
  // Prop manipultation.
  // Abstract State.

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
   <h1>Info</h1>
   <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please dont share!</p> }
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (
          <WrappedComponent {...props}/>
        ) : (
            <p>Please login to view the info</p>
          )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
// require Authentication
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />,document.getElementById('app'));