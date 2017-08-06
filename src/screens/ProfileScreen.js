import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name.first} profile`
  });
  render() {
    const { params } = this.props.navigation.state;
    const { name, picture } = params;
    console.log(params);
    return (
      <View>
        <Text>
          Hi! My name is {name.first}
        </Text>
        <Image
          source={{ uri: picture.large }}
          style={{ height: 250, width: 250 }}
        />
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};
