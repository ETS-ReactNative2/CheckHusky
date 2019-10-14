import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import * as CONST from '../../Utils/Constants';
import NavigationService from '../../Services/NavigationService';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';

class ProfileTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }

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
  
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile Tab</Text>
        <View style={[styles.avatar, styles.avatarContainer]}>
            <Image source={{ uri: this.state.filePath.uri }} style={styles.avatar}/>
        </View>
        <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
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
