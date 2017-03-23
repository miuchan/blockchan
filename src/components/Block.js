import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import BlockHeader from './BlockHeader';
import Summary from './Summary';
import Transactions from './Transactions';
import Loading from './Loading';

class Block extends Component {

  render() {
    const { block: { isFetching, ok } } =this.props;
    const style = {
      padding: '20px',
      textAlign: 'center'
    }

    return (
      <Container>

        { !isFetching && !ok &&
          <div style={style}>
            <h2>Block not found.</h2>
          </div>
        }
        { !isFetching && ok &&
          <div>
            <Row>
              <Col md={12}>
                <BlockHeader {...this.props} />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Summary {...this.props}/>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Transactions {...this.props}/>
              </Col>
            </Row>
          </div>
        }
        { isFetching && <Loading size={50} /> }

      </Container>
    )
  }
}

export default Block;
