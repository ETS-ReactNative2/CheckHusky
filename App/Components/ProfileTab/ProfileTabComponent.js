import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import * as CONST from '../../Utils/Constants';
import NavigationService from '../../Services/NavigationService';
import styles from './styles';

class ProfileTabComponent extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props !== prevProps
      && this.props.message === CONST.USER_LOGGED_OUT_SUCCESSFULLY
    ) {
      NavigationService.navigateAndReset('LoginScreen');
    }
  }

  logout() {
    this.props.userLogout();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile Tab</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.text}>Name :  </Text>
          <Text style={styles.text}>
            {this.props.userData && this.props.userData.name}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.subsContainer}
          onPress={() => this.logout()}
        >
          <Text style={styles.subsText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileTabComponent);
