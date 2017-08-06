import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import PropTypes from "prop-types";

const APIURL = "https://randomuser.me/api/?results=25";

export default class MainScreen extends Component {
  static navigationOptions = {
    title: "People"
  };

  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.fetchRandomUsers();
  }

  async fetchRandomUsers() {
    try {
      const response = await fetch(APIURL);
      const responseJson = await response.json();
      this.setState({ people: responseJson.results });
      console.log(responseJson);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { containerStyle, listItemStyle, nameStyle } = styles;
    return (
      <View style={containerStyle}>
        <FlatList
          data={this.state.people}
          keyExtractor={item => item.email}
          renderItem={({ item }) =>
            <TouchableWithoutFeedback onPress={() => navigate("Profile", item)}>
              <View style={listItemStyle}>
                <Text style={nameStyle}>
                  {item.name.first} {item.name.last}
                </Text>
                <Image
                  source={{ uri: item.picture.medium }}
                  style={{ height: 100, width: 100 }}
                />
              </View>
            </TouchableWithoutFeedback>}
        />
      </View>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  listItemStyle: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10
  },
  nameStyle: {
    fontSize: 25
  }
});
