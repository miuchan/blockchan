import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import BlocksList from './BlocksList';
import DateSelecter from './DateSelecter';

class Blocks extends Component {

  render() {

    const styles = {
      title: {
        paddingLeft: 20,
        paddingTop: 20
      },
      small: {
        fontSize: '60%',
        color: '#999'
      }
    }

    return (
      <Container>
        <Row>
          <Col md={4}>
            <DateSelecter {...this.props} />
          </Col>
          <Col md={8}>
            <h1 style={styles.title}>
              Blocks
              <small style={styles.small}> by date.</small>
            </h1>
            <BlocksList {...this.props} timeFormat="timestamp" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Blocks;
