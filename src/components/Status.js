import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SyncStatus from './SyncStatus';
import LastBlock from './LastBlock';
import BTCNodeInfo from './BTCNodeInfo';

class Status extends Component {

  render() {

    return (
      <Container>
        <Row>
          <Col md={7}>
              <Row>
                <Col md={12}>
                  <SyncStatus {...this.props} />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <LastBlock {...this.props} />
                </Col>
              </Row>
          </Col>
          <Col md={5}>
              <BTCNodeInfo {...this.props} />
          </Col>
        </Row>
      </Container>

    )
  }
}

export default Status;
