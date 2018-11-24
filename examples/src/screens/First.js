import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class First extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3498DB"
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "bold" }}>
          {"First Screen"}
        </Text>

        <TouchableOpacity
          style={{
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            backgroundColor: "#FFFFFF",
            padding: 20,
            margin: 25,
            borderRadius: 10
          }}
          onPress={() => this.props.navigation.navigate("_Second")}
        >
          <Text>{"Navigate!"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export { First };
