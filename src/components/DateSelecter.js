import React, { Component, PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { indigo200 } from 'material-ui/styles/colors';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired,
  pagination: PropTypes.object.isRequired
}

class DateSelecter extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(...values) {
    const { changeDate, dispatch } = this.props;
    dispatch(changeDate(values[1]));
  }

  onClickHandler(date) {
    const { changeDate, dispatch } = this.props;
    dispatch(changeDate(date));
  }
  render() {
    const { pagination } = this.props;
    const styles = {
      fontIcon: {
        display: 'block',
        textAlign: 'center',
        fontSize: '90px'
      },
      wrapper: {
        margin: '20px auto',
        textAlign: 'center',
        fontSize: '24px'
      },
      buttonContainer: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },
      btn: {
        margin: '5px'
      }


    }
    return (
      <div>
        <div
          className="wrapper"
          style={styles.wrapper} >
          <FontIcon
            style={styles.fontIcon}
            className="material-icons">date_range</FontIcon>
          <h1>Blocks Mined on:</h1>
          <p>{this.props.blockDate} UTC</p>
          <DatePicker
            floatingLabelText="Select A Date"
            textFieldStyle={{width: '80%'}}
            onChange={this.onChangeHandler}/>
          <div
            className="button-container"
            style={styles.buttonContainer}>
            <RaisedButton
              style={styles.btn}
              backgroundColor={indigo200}
              label={pagination.prev}
              icon={<FontIcon className="material-icons">keyboard_arrow_left</FontIcon>}
              onClick={() => this.onClickHandler(pagination.prev)}/>
            <RaisedButton
              style={styles.btn}
              backgroundColor={indigo200}
              label={pagination.next}
              labelPosition="before"
              icon={<FontIcon className="material-icons">keyboard_arrow_right</FontIcon>}
              onClick={() => this.onClickHandler(pagination.next)}/>
          </div>

        </div>
      </div>
    )
  }
}

DateSelecter.propTypes = propTypes;

export default DateSelecter;
