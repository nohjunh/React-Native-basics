import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // 모든 View는 기본적으로 Flex Container
    // 모바일에서 Flex Direction의 기본값은 column
    // 픽셀이 아닌 flex를 통해 비율로 레이아웃을 구성해야 된다.
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 2, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}
