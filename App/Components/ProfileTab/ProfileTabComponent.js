import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import {
  View, Text, TouchableOpacity, Image, Button
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icons from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import * as CONST from '../../Utils/Constants';
import NavigationService from '../../Services/NavigationService';
import styles from './styles';

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
    const options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };

  _renderHeader() {
    return (
      <View>
        <View style={[styles.avatar, styles.avatarContainer]}>
          {
              this.state.filePath.uri
                ? <Image source={{ uri: this.state.filePath.uri }} style={styles.avatar} />
                : <Icons name="user" size={60} color={CONST.GREY_COLOR} />
            }
          <Icons name="camerao" style={styles.cameraIcon} size={20} onPress={this.chooseFile.bind(this)} color={CONST.PRIMARY_COLOR} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.text}>
            {/* {this.props.userData && this.props.userData.email} */}
            hemant.parihar18@gmail.com
          </Text>
        </View>
      </View>
    );
  }

  _renderDetails() {
    return (
      <View style={styles.detsContainer}>
        <View style={styles.itemContaine}>
          <View style={styles.iconContainer}>
            <FontAwesome5Icon name="user" size={30}  color={CONST.GREY_COLOR} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>
              NAME
            </Text>
            <Text style={styles.labelVal}>
              Hemant Singh Parihar
            </Text>
          </View>
        </View>
        <View style={styles.itemContaine}>
          <View style={styles.iconContainer}>
            <Icons name="mobile1" size={30}  color={CONST.GREY_COLOR} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>
              MOBILE
            </Text>
            <Text style={styles.labelVal}>
              9179314652
            </Text>
          </View>
        </View>
        <View style={styles.itemContaine}>
          <View style={styles.iconContainer}>
            <EntypoIcon name="address" size={30}  color={CONST.GREY_COLOR} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>
              ADDRESS
            </Text>
            <Text numberOfLines={3} style={styles.labelVal}>
              93 yashoda nagar Indore - 452010 
            </Text>
          </View>
        </View>
        <View style={styles.itemContaine}>
          <View style={styles.iconContainer}>
            <FontAwesome5Icon name="birthday-cake" size={30}  color={CONST.GREY_COLOR} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>
              DOB
            </Text>
            <Text style={styles.labelVal}>
              18/11/89
            </Text>
          </View>
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

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          { this._renderHeader() }
        </View>
        <View style={styles.detailsCon}>
          { this._renderDetails() }
        </View>
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
