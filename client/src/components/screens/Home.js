import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  StatusBar
} from "react-native";
import { Message } from "../../presentation";

import { connect } from "react-redux";

import { loadChat } from "../../actions/messageActions";

class Home extends Component {
  componentDidMount() {
    this.props.loadChat();
  }

  navigateToConversation(item) {
   // console.log("pressed");
   // console.log(item.fromUser);
    this.props.navigation.navigate("conversation", {
      user: item.fromUser
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.props.showActivityIndicator ? (
          <ActivityIndicator size="large" />
        ) : null}
        <FlatList
          data={this.props.messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Message
              {...item}
              nav={this.navigateToConversation.bind(this, { ...item })}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgb(243,243,243)"
  }
});

const mapStateToProps = state => {
  return {
    messages: state.message.messages,
    showActivityIndicator: state.message.showActivityIndicator,
    fromUser: state.message.fromUser
  };
};

export default connect(
  mapStateToProps,
  { loadChat }
)(Home);
