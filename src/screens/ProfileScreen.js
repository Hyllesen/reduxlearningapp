import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ProfileScreen extends Component {
  //   static navigationOptions = ({ navigation }) => ({
  //     title: `${navigation.state.params.user} profile`
  //   });
  render() {
    const { params } = this.props.navigation.state;
    console.log(params);
    return (
      <View>
        <Text>Hi! My name is ..x.x.</Text>
      </View>
    );
  }
}
