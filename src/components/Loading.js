import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { indigo200 } from 'material-ui/styles/colors';
const propTypes = {
  info: PropTypes.string,
  size: PropTypes.number
}

class Loading extends Component {

  render() {
    const style = {
      padding: '20px',
      textAlign: 'center'
    }

    const { info, size = 30 } = this.props;

    return (
      <div style={style}>
        <CircularProgress color={indigo200} size={size}/>
        {info && <p>{info}</p>}
      </div>
    )
  }
}

Loading.propTypes = propTypes;

export default Loading;
