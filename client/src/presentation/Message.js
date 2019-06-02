import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Message = props => {

  const style = [];
  style.push(styles.message);
  // if (props.last) {
  //   style.push({ borderBottomWidth: StyleSheet.hairlineWidth });
  // }

  const profileImage =
    "https://firebasestorage.googleapis.com/v0/b/chatapp-90850.appspot.com/o/blaine.jpg?alt=media&token=b88a2b38-b5d1-474d-bc62-a28d16298cd7";

  return (
    <TouchableOpacity
      onPress= {() => props.nav()}
      activeOpacity={0.7}
      style = {style}
    >
      
        <View style={styles.topRow}>
          <View style={styles.userCol}>
            <Image
              style={styles.profile}
              source={{
                uri: profileImage
              }}
            />
            <Text style={styles.user}>{props.fromUser}</Text>
          </View>

          <View style={styles.timeCol}>
            {/* <Text> {props.dateTime} </Text> */}
            <Text style={styles.date}> Yesterday </Text>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.messageText}> {props.message} </Text>
        </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  message: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "rgb(255,255,255)",
    borderColor: "rgb(255,255,255)",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10
  },
  bottomRow: {
    flexDirection: "row"
  },
  topRow: {
    flexDirection: "row"
  },
  userCol: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  timeCol: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  user: {
    fontSize: 20,
    marginLeft: 10
  },
  date: {
    color: "rgb(102,102,102)"
  },
  messageText: {
    fontSize: 14
  }
});

export default Message;
