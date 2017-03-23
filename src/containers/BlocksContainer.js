import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Blocks from '../components/Blocks';
import {
  changeDate,
  fetchBlocks
} from '../actions/BlockActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  blocksLength: PropTypes.number.isRequired
};

class BlocksContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, blocksLength } = this.props;
    if (blocksLength === 0) {
      dispatch(fetchBlocks());
    }
  }

  render() {

    return (
      <Blocks {...this.props} />
    )
  }
}

BlocksContainer.propTypes = propTypes;

function mapStateToProps(state) {

  return {...state.blocks, changeDate };
}

export default connect(mapStateToProps)(BlocksContainer);
