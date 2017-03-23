import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Status from '../components/Status';
import {
  fetchSyncStatus,
  fetchBTCNodeInfo,
  fetchLastBlock
} from '../actions/StatusActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired
};

class StatusContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSyncStatus());
    dispatch(fetchBTCNodeInfo());
    dispatch(fetchLastBlock());
  }

  render() {
    return (
      <Status {...this.props}/>
    )
  }
}

StatusContainer.propTypes = propTypes;

function mapStateToProps(state) {
  return state.status;
}

export default connect(mapStateToProps)(StatusContainer);
