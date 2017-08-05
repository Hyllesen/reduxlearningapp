import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from "react-native";

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
      const response = await fetch("https://randomuser.me/api/?results=25");
      const responseJson = await response.json();
      this.setState({ people: responseJson.results });
      console.log(responseJson);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.people}
          keyExtractor={item => item.email}
          renderItem={({ item }) =>
            <TouchableWithoutFeedback onPress={() => navigate("Profile", item)}>
              <View style={styles.listItem}>
                <Text style={styles.nameStyle}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 50
  },
  listItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10
  },
  nameStyle: {
    fontSize: 25
  }
});
