import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Loading from './Loading';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  blocks: PropTypes.array.isRequired,
  timeFormat: PropTypes.string.isRequired
};
class BlocksList extends Component {

  render() {

    const { isFetching, blocks, timeFormat } = this.props;
    const styles = {
      paper: {
        margin: '20px 0',
        overflow: 'hidden'
      },
      title: {
        paddingLeft: 20,
        paddingTop: 20
      },
      small: {
        fontSize: '60%',
        color: '#999'
      },
      info: {
        padding: '20px',
        textAlign: 'center'
      }
    }
    let tableRows = [];

    if (blocks.length > 0) {
      tableRows = blocks.map((block) => {

          return (
            <TableRow key={block.hash}>
              <TableRowColumn key={block.height}>
                <Link to={'/block/' + block.hash}>{block.height}</Link>
              </TableRowColumn>
              <TableRowColumn key={block.time}>
                { timeFormat === 'age' && moment(block.time, 'X').fromNow() }
                { timeFormat === 'timestamp' && moment(block.time, 'X').format('HH:mm:ss') }
              </TableRowColumn>
              <TableRowColumn key={block.txlength}>{block.txlength}</TableRowColumn>
              <TableRowColumn key={block.poolInfo.url}><a href={block.poolInfo.url}>{block.poolInfo.poolName}</a></TableRowColumn>
              <TableRowColumn key={block.size}>{block.size}</TableRowColumn>
            </TableRow>
          );
      });
    }


    return (
      <Paper zDepth={1}>

          <Table >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn><strong>Height</strong></TableHeaderColumn>
                <TableHeaderColumn>
                  <strong>
                    {timeFormat === 'timestamp' && 'Time'}
                    {timeFormat === 'age' && 'Age'}
                  </strong>
                </TableHeaderColumn>
                <TableHeaderColumn><strong>Transactions</strong></TableHeaderColumn>
                <TableHeaderColumn><strong>Mined by</strong></TableHeaderColumn>
                <TableHeaderColumn><strong>Size</strong></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            {!isFetching && blocks.length > 0 &&
              <TableBody displayRowCheckbox={false} showRowHover={true}>
                { tableRows }
              </TableBody>
            }
          </Table>
          {isFetching  && <Loading info="Waiting for blocks..." />}
          {!isFetching  && blocks.length === 0 &&
            <div style={styles.info}>
              <h2>No blocks yet.</h2>
            </div>
          }
      </Paper>
    )
  }
}

BlocksList.propTypes = propTypes;

export default BlocksList;
