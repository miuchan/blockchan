import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LatestBlocks from '../components/LatestBlocks';
import { fetchBlocks } from '../actions/BlockActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  blocksLength: PropTypes.number.isRequired,
  blocks: PropTypes.array.isRequired
};


class LatestBlocksContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, blocks } = this.props;
    if (blocks.blockDate !== new Date()) {
      dispatch(fetchBlocks());
    }

  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, blocksLength } = this.props;
    if (nextProps.blocksLength !== blocksLength) {
      dispatch(fetchBlocks());
    }
  }

  render() {

    return (
      <LatestBlocks {...this.props} />
    )
  }
}

LatestBlocksContainer.propTypes = propTypes;

function mapStateToProps(state) {

  return {...state.blocks};
}

export default connect(mapStateToProps)(LatestBlocksContainer);
