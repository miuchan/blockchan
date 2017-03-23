import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav';
import { changeUnit } from '../actions/UnitActions';

class NavContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch } = this.props;
    return (
      <Nav {...this.props} handleChange={(unit) => dispatch(changeUnit(unit))} />
    )
  }
}

function mapStateToProps(state) {
  return {...state.unit};
}

export default connect(mapStateToProps)(NavContainer);
