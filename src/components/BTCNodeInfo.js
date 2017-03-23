import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import { indigo200 } from 'material-ui/styles/colors';

const propTypes = {
  BTCNodeInfo: PropTypes.object.isRequired
};

class BTCNodeInfo extends Component {

  render() {
    const { BTCNodeInfo } = this.props;
    const styles = {
      nodeInfo: {
        margin: '20px 0',
        overflow: 'hidden',
        backgroundColor: indigo200,
        borderRadius: '4px'
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
      <div className="node-info" style={styles.nodeInfo} >
        <h1 style={styles.title}>Bitcoin node information</h1>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              <TableRow >
                <TableRowColumn ><strong>Version</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{BTCNodeInfo.version}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Protocol version</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{BTCNodeInfo.protocolversion}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Blocks</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{BTCNodeInfo.blocks}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Time Offset</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{BTCNodeInfo.timeoffset}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Connections</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{BTCNodeInfo.connections}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Mining Difficulty</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{BTCNodeInfo.difficulty}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Network</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{BTCNodeInfo.network}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Proxy setting</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{BTCNodeInfo.proxy}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Info Errors</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{BTCNodeInfo.errors}</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
      </div>
    )
  }
}

BTCNodeInfo.propTypes = propTypes;

export default BTCNodeInfo;
