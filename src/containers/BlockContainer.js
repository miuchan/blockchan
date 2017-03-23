import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Block from '../components/Block';
import {
  fetchBlock
} from '../actions/BlockActions';
import { fetchTxsOfBlock } from '../actions/TransactionsActions';

const propTypes = {
  dispatch: PropTypes.func
};

class BlockContainer extends Component {
  constructor(props) {
    super(props);
    this.loadTxs = this.loadTxs.bind(this);
  }

  loadTxs() {
    const { dispatch, routeParams : { hash }, txsOfBlock: { pageNumNow, pagesTotal } } = this.props;
    
    return () => {
      if (pageNumNow >= 0 && pageNumNow <= pagesTotal) {
        dispatch(fetchTxsOfBlock(hash, pageNumNow));
      } else {
        return;
      }
    }
  }

  componentDidMount() {
    const { dispatch, routeParams : { hash } } = this.props;
    dispatch(fetchBlock(hash));
    dispatch(fetchTxsOfBlock(hash, 0));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, routeParams : { hash } } = nextProps;
    if (hash !== this.props.routeParams.hash) {
      dispatch(fetchBlock(hash));
    }

  }

  render() {

    return (
      <Block {...this.props} loadMore={this.loadTxs()} />
    )
  }
}

BlockContainer.propTypes = propTypes;

function mapStateToProps(state) {

  return {
    block: state.block,
    txsOfBlock: state.txsOfBlock
  };
}

export default connect(mapStateToProps)(BlockContainer);
