import React, { Component, PropTypes } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import InfiniteScroll from './InfiniteScroll';
import TransactionBox from './TransactionBox';
import Loading from './Loading';

const propTypes = {
  txs: PropTypes.array,
  loadMore: PropTypes.func.isRequired
}
class Transactions extends Component {

  constructor(props) {
    super(props);
    this.renderTxBoxs = this.renderTxBoxs.bind(this);
  }

  renderTxBoxs() {
    const { txsOfBlock: { txs } } = this.props;
    return txs.map(tx =>  <TransactionBox key={tx.txid} tx={tx}/>);
  }

  render() {
    const { loadMore, txsOfBlock: { loadingMore, txs, pageNumNow, pagesTotal } } = this.props;

    return (
      <Container>
        <Row>
          <Col md={12}>
            <h2>Transactions</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <InfiniteScroll
              hasMore={pageNumNow < pagesTotal}
              showLoader={true}
              loadingMore={loadingMore}
              items={txs}
              loadMore={loadMore}
              loader={<Loading info="Loading Transactions..."/>}
              renderList={() => this.renderTxBoxs()}
            />

          </Col>
        </Row>
      </Container>

    )
  }
}

Transactions.propTypes = propTypes;

export default Transactions;
