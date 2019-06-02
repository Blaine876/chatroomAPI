import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Conversation extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: params.currentConversation || ""
    };
  };

  componentDidMount() {
    const {user} = this.props.navigation.state.params;
   // console.log(user);
    this.props.navigation.setParams({
      currentConversation: user
    });
    // fetch conversation with user
  }

  render() {
    return (
      <View>
        <Text> Conversation Page </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Conversation;
