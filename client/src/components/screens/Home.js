import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Message } from "../../presentation";

import { connect } from "react-redux";

import { loadChat } from "../../actions/messageActions";

class Home extends Component {
  componentDidMount() {
    this.props.loadChat();
  }

  render() {
    const { messages } = this.props;
    const lastIndex = messages.length - 1;

    return (
      <View style={styles.container}>
        {this.props.showActivityIndicator ? (
          <ActivityIndicator size="large" />
        ) : null}
        {messages.map((message, i) => {
          const last = i === lastIndex;
          return <Message last={last} {...message} />;
        })}
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
    alignContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    messages: state.message.messages,
    showActivityIndicator: state.message.showActivityIndicator
  };
};

export default connect(
  mapStateToProps,
  { loadChat }
)(Home);
