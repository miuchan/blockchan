import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

const propTypes = {
  lastBlock: PropTypes.object.isRequired
}

class LastBlock extends Component {
  render() {
    const { lastBlock } = this.props;
    const styles = {
      paper: {
        margin: '20px 0',
        overflow: 'hidden'
      },
      title: {
        paddingLeft: 20,
        paddingTop: 20
      },
      alignRight: {
        textAlign: 'right'
      }
    }

    return (

      <Paper style={styles.paper} zDepth={1}>
        <h1 style={styles.title}>Last Block</h1>
        { true &&
          <Table >
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              <TableRow >
                <TableRowColumn ><strong>Last Block Hash (Bitcoind)</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>
                  <Link to={'/block/' + lastBlock.syncTipHash}>{lastBlock.syncTipHash}</Link>
                </TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Current Blockchain Tip (insight)</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>
                  <Link to={'/block/' + lastBlock.lastblockhash}>{lastBlock.lastblockhash}</Link>
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        }

      </Paper>
    )
  }
}

LastBlock.propTypes = propTypes;

export default LastBlock;
