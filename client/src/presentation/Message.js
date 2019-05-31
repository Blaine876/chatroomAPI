import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const Message = props => {
  console.log(props);
  const style = [];
  style.push(styles.message);
  if (props.last) {
     style.push({ borderBottomWidth: StyleSheet.hairlineWidth });
  
  }

  return (
    <View style={style}>
      <Text> {props.toUser}</Text>
      <Text>{props.fromUser}</Text>
      <Text> {props.message} </Text>
      <Text> {props.dateTime} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    width: "100%",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "rgb(233,10,10)"
  }
});

export default Message;
