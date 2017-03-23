import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { indigo200, indigo500 } from 'material-ui/styles/colors';
import { Visible } from 'react-grid-system';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.onMenuChangeHandler = this.onMenuChangeHandler.bind(this);
    this.onTextFieldChangeHandler = this.onTextFieldChangeHandler.bind(this);
    this.onClickHander = this.onClickHander.bind(this);
  }

  onMenuChangeHandler(event, index, value) {
    const { handleChange } = this.props;
    handleChange(value);
  }

  onTextFieldChangeHandler(event, newValue) {
    this.setState({textFieldValue: newValue});
  }
  onClickHander(event) {
    const { textFieldValue } = this.state;
    browserHistory.push(`/block/${textFieldValue}`);
  }
  render() {

    const { unit } = this.props;
    const styles = {
      toolbar: {
        backgroundColor: indigo200
      },
      underline: {
        borderColor: indigo500
      }
    }
    return (
        <Toolbar style={styles.toolbar}>

            <ToolbarGroup>
              <ToolbarTitle text="BLOCKCHAN"/>
            </ToolbarGroup>
            <ToolbarGroup>
              <Link to="/"><FlatButton label="Home" /></Link>
              <Link to="/blocks"><FlatButton label="blocks" /></Link>
              <Link to="/status"><FlatButton label="status" /></Link>
            </ToolbarGroup>
            <Visible lg xl>
              <ToolbarGroup>
                  <FontIcon onClick={this.onClickHander} className="material-icons">search</FontIcon>
                  <TextField
                    underlineFocusStyle={styles.underline}
                    hintText="Block Hash"
                    onChange={this.onTextFieldChangeHandler} />
              </ToolbarGroup>
            </Visible>
            <ToolbarGroup>

              <DropDownMenu
                value={unit}
                iconStyle={{fill: '#000'}}
                onChange={this.onMenuChangeHandler}>
                <MenuItem key={0} value="btc" primaryText="BTC" />
                <MenuItem key={1} value="usd" primaryText="USD" />
                <MenuItem key={2} value="mbtc" primaryText="mBTC" />
                <MenuItem key={3} value="bits" primaryText="bits" />
              </DropDownMenu>
            </ToolbarGroup>
        </Toolbar>
    );
  }
}

export default Nav;
