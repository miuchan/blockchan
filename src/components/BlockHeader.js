import React, { Component, PropTypes } from 'react';
import Loading from 'components/Loading';
import { indigo50 } from 'material-ui/styles/colors';

const propTypes = {
  block: PropTypes.object
};

class BlockHeader extends Component {

  shouldComponentUpdate(nextProps) {
    const hash = this.props.block.hash,
          nextHash = nextProps.block.hash;
    return hash !== nextHash;
  }

  render() {

    const styles = {
      blockHash: {
        margin: '20px 0',
        padding: '15px',
        overflow: 'hidden',
        backgroundColor: indigo50,
        borderRadius: '3px',
        wordBreak: 'break-all'
      },
      title: {
        paddingLeft: 20,
        paddingTop: 20
      },
      hash: {
        color: '#6e6e6e'
      }
    }

    const { block } = this.props;

    return (
      <div style={styles.paper}>
        <h1 style={styles.title}>Block #{!block.isFetching && block.height}</h1>
        {!block.isFetching &&
          <p className="block-hash" style={styles.blockHash}>
            <strong>BlockHash</strong> <span style={styles.hash}>{block.hash}</span>
          </p>
        }
        {block.isFetching && <Loading info="Loading Block Information..."></Loading>}
      </div>
    )


  }
}

BlockHeader.propTypes = propTypes;


export default BlockHeader;
