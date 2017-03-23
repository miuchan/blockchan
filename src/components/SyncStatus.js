import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';
import { indigo200 } from 'material-ui/styles/colors';

const propTypes = {
  syncStatus: PropTypes.object.isRequired
}
class SyncStatus extends Component {
  render() {
    const { syncStatus } = this.props;
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
        <h1 style={styles.title}>Sync Status</h1>
        { true &&
          <Table >
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              <TableRow >
                <TableRowColumn ><strong>Sync Progress</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>
                  <LinearProgress color={indigo200} style={{width: '60%', float: 'left'}} mode="determinate" value={syncStatus.syncPercentage} />
                  {syncStatus.syncPercentage}%
                </TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Current Sync Status</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{syncStatus.status}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Initial Block Chain Height</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{syncStatus.blockChainHeight}</TableRowColumn>
              </TableRow>
              <TableRow >
                <TableRowColumn ><strong>Sync Type</strong></TableRowColumn>
                <TableRowColumn style={styles.alignRight}>{syncStatus.type}</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        }

      </Paper>
    )
  }
}

SyncStatus.propTypes = propTypes;

export default SyncStatus;
