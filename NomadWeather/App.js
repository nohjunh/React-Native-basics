import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// View와 text, styleSheet을 import한다.

export default function App() {
  return (
    // RN은 HTML이 아니기에 div태그가 아니라 View 태그를 쓴다.
    // View는 컨테이너다.
    // p, span도 없기에 react native에 있는 모든 text는 text component에 들어가야 된다.
    // status-Bar component는 시계, 배터리, Wi-Fi를 보여준다. (light로 적용해보며 차이점 파악)
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // object를 생성
  // CSS속성을 사용하기 쉽게하므로 styleSheet.create사용 -> css자동완성기능을 제공하기 때문
  container: {
    // styles의 container object
    // CSS의 class 이름처럼 생각하면 된다.
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 28,
    color: "red",
  },
});
