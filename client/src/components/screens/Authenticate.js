import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { connect } from "react-redux";

import { loginUser, authCheck } from "../../actions/authActions";
import keys from "../../config/keys";

class Authenticate extends Component {
  componentDidMount() {
    this.props.loginUser(this.props.email, this.props.password);

  
  }

 

  componentDidUpdate() {
    this.props.navigation.navigate("home");
    //  console.log("Navigated to Messages");
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loggedIn: state.auth.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginUser, authCheck }
)(Authenticate);
