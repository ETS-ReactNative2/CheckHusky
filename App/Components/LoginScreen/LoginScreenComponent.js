import React from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import GoogleSignInContainer from "../GoogleAuth/GoogleSignInContainer";
import AppleSignInContainer from "../AppleAuth/AppleSignInComponent";
import Validators from '../../Utils/Validators'
import showToast from '../../Utils/showToast'
import styles from './styles';

export default class LoginScreenComponent extends React.Component<props> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.signInContainers}>
          <Text style={styles.title}>{"Login Component"}</Text>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View style={{ flex: 1 }}>
              <TextInput
                underlineColorAndroid={"transparent"}
                returnKeyType="next"
                placeholder="Email"
                value={this.state.email}
                autoCapitalize={"none"}
                ref={component => (this.email = component)}
                onChangeText={email => this.setState({ email })}
                keyboardType={"email-address"}
                style={styles.emailInput}
              />
            </View>
            {this.state.email !== "" && (
              <View style={styles.crossIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ email: "" });
                  }}
                  style={[styles.crossIcon]}
                >
                  <Text style={{ fontSize: 26 }}>x</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TextInput
                underlineColorAndroid={"transparent"}
                returnKeyType="next"
                placeholder="Password"
                value={this.state.password}
                autoCapitalize={"none"}
                secureTextEntry={true}
                ref={component => (this.password = component)}
                onChangeText={password => this.setState({ password })}
                style={styles.emailInput}
              />
            </View>
            {this.state.password !== "" && (
              <View style={styles.crossIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ password: "" });
                  }}
                  style={[styles.crossIcon]}
                >
                  <Text style={{ fontSize: 26 }}>x</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <TouchableOpacity
            style={styles.subsContainer}
            onPress={() => this._onSubmit()}
          >
            <Text style={styles.subsText}>SUBMIT</Text>
          </TouchableOpacity>
          <View>
            <GoogleSignInContainer/>
          </View>
          <View>
            <AppleSignInContainer/>
          </View>
        </View>
      </ScrollView>
    );
  }
  _onSubmit() {
    const { email, password } = this.state;
    if (Validators.isEmpty(email)) {
			showToast("Email is empty");
		} else if (!Validators.validEmail(email)) {
			showToast("Email is invalid");
		} else if (Validators.isEmpty(password)) {
			showToast("Password is empty");
		} else if (!Validators.isValidPassword(password)) {
			showToast("Password is invalid");
		} else {
      let user = { name: email, password: password };
      this.props.userLogin(user);
		}
  }
}
