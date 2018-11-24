import React, { Component } from "react";
import { View, Text } from "react-native";

class Second extends Component {
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
          backgroundColor: "#E74C3C"
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "bold" }}>
          {"Second Screen"}
        </Text>
      </View>
    );
  }
}

export { Second };
