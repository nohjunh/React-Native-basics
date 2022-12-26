import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";

// ScrollView는 기본적으로 세로 스크롤이다.
// horizontal을 추가하면 가로 스크롤이 된다.
// contentContainerStyle을 추가하면 스크롤 뷰의 스타일을 지정할 수 있다.
// ScrollView는 스크린보다 커야하기에 flex size가 의미가 없다.
// Scorll은 기본 스크린에서 더 커야지 스크롤이 가능하다. (스크롤을 넘겨서 스크롤뷰를 보기 원하기 때문)
// Dimensions 사용 시 사용자 디바이스 화면 크기를 얻을 수 있다.

const { width: SCREEN_WIDTH } = Dimensions.get("window"); // object안에 있는 width를 가져오고 이걸 SCREEN_WIDTH라 칭함

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    flex: 1,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -20,
    fontSize: 60,
  },
});
