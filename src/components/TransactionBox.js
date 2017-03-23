import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { indigo100, indigo50 } from 'material-ui/styles/colors';
import { Container, Row, Col } from 'react-grid-system';

const propTypes = {
  tx: PropTypes.object
}

class TransactionBox extends Component {

  render() {

    const styles = {
      tx: {
        margin: '10px 0',
        fontSize: '12px',
        textDecoration: 'none'
      },
      txHF: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '50px',
        lineHeight: '50px',
        padding: '0 15px'
      },
      txsHash: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      },
      txBody: {
        padding: '15px 15px'
      },
      v: {
        width: '100%',
        padding: '0 10px',
        margin: '15px 0',
        backgroundColor: indigo50,
        borderRadius: '3px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box'
      },
      address: {
        lineHeight: '3em',
        width: '100%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      },
      btcValue: {
        textAlign: 'right'
      },
      sendIcon: {
        fontSize: '56px',
        textAlign: 'center'
      },
      txFooterItem: {
        lineHeight: '50px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      },
      confirmations: {
        margin: '0 1em'
      }
    }

    const { tx, tx: { vin, vout } } = this.props;

    const vins = vin.map(v => (
      <div key={v.n} className="vin-wrapper">
        <div className="vin" style={styles.v}>
          <Row>
            <Col xs={6} sm={8} md={5} lg={7} xl={8}>
              <div className="address" style={styles.address}>
                  {v.addr}
              </div>
            </Col>
            <Col xs={6} sm={4} md={7} lg={5} xl={4}>
              <p style={styles.btcValue} className="btc-value">{v.value} BTC<span>(U)</span></p>
            </Col>
          </Row>
        </div>
      </div>
    ));
    const vouts = vout.map(v => (
      <div key={v.n} className="vout-wrapper">
        <div className="vout" style={styles.v}>
          <Row>
            <Col xs={6} sm={7} md={5} lg={7}>
              <div className="address" style={styles.address}>
                  {v.scriptPubKey.addresses !== undefined ?  v.scriptPubKey.addresses[0] : null}
              </div>
            </Col>
            <Col xs={6} sm={5} md={7} lg={5}>
              <p style={styles.btcValue}  className="btc-value">{v.value} BTC<span>(U)</span></p>
            </Col>
          </Row>
        </div>
      </div>
    ));

    return (
      <Container>
        <Paper zDepth={1}>
          <div className="tx" style={styles.tx}>
            <div className="tx-header" style={{...styles.txHF, backgroundColor: indigo100}}>
              <div style={styles.txsHash}>
                  {tx.txid}
              </div>

            </div>
            <Divider />
            <div className="tx-body" style={styles.txBody}>
              <Row>
                <Col md={5}>
                  {vins}
                </Col>
                <Col md={2}>
                  <div  style={styles.sendIcon}>
                    <FontIcon className="material-icons">forward</FontIcon>
                  </div>

                </Col>
                <Col md={5}>
                  {vouts}
                </Col>

              </Row>
            </div>
            <Divider />
            <div className="tx-footer" style={styles.txHF}>
              <div className="fee" style={styles.txFooterItem}>
                {tx.fees && <span>FEE: {tx.fees} BTC</span>}
              </div>
              <div style={styles.txFooterItem}>
                  <span className="confirmations" style={styles.confirmations}>{tx.confirmations} CONFIRMATIONS</span>
                  <span>{tx.valueOut} BTC</span>
              </div>
            </div>
          </div>
        </Paper>
      </Container>

    )
  }
}

TransactionBox.propTypes = propTypes;

export default TransactionBox;
