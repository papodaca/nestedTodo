import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Todos</a>
          </div>
        </div>
      </nav>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default App;
