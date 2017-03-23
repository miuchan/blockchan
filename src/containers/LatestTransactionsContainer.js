import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LatestTransactions from '../components/LatestTransactions';
import {
  fetchLatestTransactions
} from '../actions/TransactionsActions';
import { fetchPrice } from '../actions/PriceActions';
import { disconnect } from '../actions/SocketIOActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired
};

class LatestTransactionsContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLatestTransactions());
    dispatch(fetchPrice());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(disconnect());
  }

  render() {
    const { status, transactions, unit, lastPrice } = this.props;
    return (
      <LatestTransactions
        status={status}
        transactions={transactions}
        unit={unit}
        price={lastPrice} />
    )
  }
}

LatestTransactionsContainer.propTypes = propTypes;

function mapStateToProps(state) {

  return {...state.transactions, ...state.unit, ...state.price};
}

export default connect(mapStateToProps)(LatestTransactionsContainer);
