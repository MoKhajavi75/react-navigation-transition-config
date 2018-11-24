import React, { Component } from "react";
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transitions: [
        {
          ID: 1,
          name: "fromLeft"
        },
        {
          ID: 2,
          name: "fromRight"
        },
        {
          ID: 3,
          name: "fromBottom"
        },
        {
          ID: 4,
          name: "fromTop"
        },
        {
          ID: 5,
          name: "zoomIn"
        },
        {
          ID: 6,
          name: "zoomOut"
        },
        {
          ID: 7,
          name: "flipX"
        },
        {
          ID: 8,
          name: "flipY"
        },
        {
          ID: 9,
          name: "fadeIn"
        }
      ]
    };
  }

  static navigationOptions = {
    header: (
      <SafeAreaView
        style={{ height: 65, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ color: "#1E272E", fontSize: 18, fontWeight: "bold" }}>
          {"transitionConfig"}
        </Text>
      </SafeAreaView>
    )
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1E272E",
          elevation: 5
        }}
      >
        <StatusBar hidden animated />

        <ScrollView
          style={{ flex: 1, alignSelf: "stretch" }}
          showsVerticalScrollIndicator={false}
        >
          {this.state.transitions.map(item => {
            return (
              <TouchableOpacity
                key={item.ID}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  backgroundColor: "#E17055",
                  margin: 20,
                  padding: 20,
                  borderRadius: 10
                }}
                onPress={() => this.props.navigation.navigate("_" + item.name)}
              >
                <Text
                  style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export { Landing };
