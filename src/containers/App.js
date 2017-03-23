import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavContainer from './NavContainer';

const propTypes = {
  isFetching: PropTypes.bool
};

class App extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = propTypes;

function mapStateToProps() {
  return {haha: 'haha'};
}

export default connect(mapStateToProps)(App);
