import React, { Component, PropTypes } from 'react';
import BlocksList from './BlocksList';

const propTypes = {
  blocks: PropTypes.array.isRequired
}

class LatestBlocks extends Component {

  render() {
    const styles = {
      title: {
        paddingLeft: 20,
        paddingTop: 20
      }
    }
    const { blocks } = this.props;

      return (
          <div>
            <h1 style={styles.title}>Latest Block</h1>
            <BlocksList {...this.props} blocks={blocks.length > 0 ? blocks.slice(0, 5) : blocks} timeFormat="age" />
          </div>
      );
  }
}

LatestBlocks.propTypes = propTypes;

export default LatestBlocks;
