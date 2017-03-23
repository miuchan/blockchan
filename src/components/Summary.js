import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import { Container, Row, Col } from 'react-grid-system';
import  moment from 'moment';

const propTypes = {
  block: PropTypes.object
}
class Summary extends Component {

  render() {
    const { block } = this.props;
    const styles = {
      alignRight: {
        textAlign: 'right'
      }
    };

    return (
      <Container>
        <Row>
          <Col md={12}>
            <h2>Summary</h2>
          </Col>
        </Row>
        <Paper zDepth={1}>
          <Row>
            <Col md={6}>
              <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                  <TableRow >
                    <TableRowColumn ><strong>Number Of Transactions</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>{block.tx.length}</TableRowColumn>
                  </TableRow>
                  <TableRow >
                    <TableRowColumn ><strong>Height</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>
                      {block.height}
                      {(block.isMainChain && <span> (MainChain)</span>)}
                    </TableRowColumn>
                  </TableRow>
                  <TableRow >
                    <TableRowColumn ><strong>Timestamp</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>{moment(block.time, 'X').format('lll')}</TableRowColumn>
                  </TableRow>
                  <TableRow >
                    <TableRowColumn ><strong>Mined by</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>
                      <a href={block.poolInfo.url}>{block.poolInfo.poolName}</a>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow >
                    <TableRowColumn ><strong>Merkle Root</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>{block.merkleroot}</TableRowColumn>
                  </TableRow>
                  {block.previousblockhash &&
                    <TableRow >
                      <TableRowColumn ><strong>Previous Block</strong></TableRowColumn>
                      <TableRowColumn style={styles.alignRight}>
                        <Link to={'/block/' + block.previousblockhash}>{block.height - 1}</Link>
                      </TableRowColumn>
                    </TableRow>
                  }
                  {block.nextblockhash &&
                    <TableRow >
                      <TableRowColumn ><strong>Next Block</strong></TableRowColumn>
                      <TableRowColumn style={styles.alignRight}>
                        <Link to={'/block/' + block.nextblockhash}>{block.height + 1}</Link>
                      </TableRowColumn>
                    </TableRow>
                  }
                </TableBody>
              </Table>
            </Col>
            <Col md={6}>
              <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                  <TableRow >
                    <TableRowColumn ><strong>Difficulty</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>{block.difficulty}</TableRowColumn>
                  </TableRow>
                  <TableRow >
                    <TableRowColumn ><strong>Bits</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>{block.bits}</TableRowColumn>
                  </TableRow>
                  <TableRow >
                    <TableRowColumn ><strong>Size (bytes)</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>{block.size}</TableRowColumn>
                  </TableRow>
                  <TableRow >
                    <TableRowColumn ><strong>Version</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>{block.version}</TableRowColumn>
                  </TableRow>
                  <TableRow >
                    <TableRowColumn ><strong>Block Reward</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>{block.reward}</TableRowColumn>
                  </TableRow>
                  <TableRow >
                    <TableRowColumn ><strong>Nonce</strong></TableRowColumn>
                    <TableRowColumn style={styles.alignRight}>{block.nonce}</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Col>
          </Row>
        </Paper>
      </Container>

    )
  }
}

Summary.propTypes = propTypes;

export default Summary;
