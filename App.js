import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // RN은 HTML이 아니기에 div태그가 아니라 View 태그를 쓴다.
    // View는 컨테이너다.
    // p, span도 없기에 모든 text는 text component에 들어가야 된다.
    // status-Bar component는 시계, 배터리, Wi-Fi를 보여준다.
    <View style={styles.container}>
      <Text style={styles.text}>HEllo! I made a RN aPp!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // CSS속성을 사용하기 쉽게하므로 styleSheet.create사용!
  // object를 생성
  container: {
    // style의 container object
    // CSS의 class 이름처럼 생각하면 된다.
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 28,
    color: "red",
  },
});
