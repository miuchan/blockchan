import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
// import { changeNumByUnit } from '../utils/UnitUtils';

const propTypes = {
  transactions: PropTypes.array.isRequired
}
class LatestTransactions extends Component {

  changeNumByUnit(num, unit) {
    const { price } = this.props;
    switch (unit) {
      case 'usd':
        return (num * price).toFixed(2);
      case  'mbtc':
        return (num * 1000).toFixed(5);
      case 'bits':
        return (num * 1000000).toFixed(2);
      default:
        return num;
    }
  }

  renderTxRows() {

    const alignRight = {
      textAlign: 'right'
    }
    const units = {
      usd: 'USD',
      btc: 'BTC',
      mbtc: 'mBTC',
      bits: 'bits'
    }

    const { unit, transactions } = this.props;

    return transactions.map(transaction => {
      let txid = transaction.txid;
      // let href = `https://blockexplorer.com/tx/${txid}`;
      let price = `${this.changeNumByUnit(transaction.valueOut, unit)} ${units[unit]}`;

      return (
        <TableRow key={txid}>
          <TableRowColumn>
              {txid}
          </TableRowColumn>
          <TableRowColumn style={alignRight}>
            {price}
          </TableRowColumn>
        </TableRow>
      )
    });
  }

  shouldComponentUpdate(props) {
    const status = props.status;
    if (status === 'received') {
      return true;
    }
    return false;
  }

  render() {

    const styles = {
      paper: {
        width: '100%'
      },
      title: {
        paddingLeft: 20,
        paddingTop: 20
      }
    };



    return (
      <div>
        <h1 style={styles.title}>Latest Transactions</h1>
        <Paper style={styles.paper} zDepth={1}>
          <Table >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Hash</TableHeaderColumn>
                <TableHeaderColumn style={styles.alignRight}>Value Out</TableHeaderColumn>

              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              {this.renderTxRows()}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

LatestTransactions.propTypes = propTypes;

export default LatestTransactions;
