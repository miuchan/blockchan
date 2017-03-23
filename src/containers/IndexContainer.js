import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import LatestBlocksContainer from './LatestBlocksContainer';
import LatestTransactionsContainer from './LatestTransactionsContainer';

class IndexContainer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
              <LatestBlocksContainer />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
              <LatestTransactionsContainer />
          </Col>
        </Row>
      </Container>
    )
  }
}


function mapStateToProps() {
  return {haha: 'haha'};
}

export default connect(mapStateToProps)(IndexContainer);
