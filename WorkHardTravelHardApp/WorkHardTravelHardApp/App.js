import { StatusBar } from "expo-status-bar";
import { React, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable as PressableRaw,
  TextInput,
} from "react-native";
import { theme } from "./colors";

function Pressable(props) {
  return (
    <PressableRaw
      onPress={props.onPress}
      hitSlop={props.hitSlop}
      style={({ pressed }) => [
        props.style || {},
        { opacity: pressed ? 0.5 : 1 },
      ]}
    >
      {props.children}
    </PressableRaw>
  );
}

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({}); // hashMap
  const travel = () => {
    setWorking(false);
    setText("");
  };
  const work = () => {
    setWorking(true);
    setText("");
  };
  // payload = Data Transmitted
  const onChangeText = (payload) => {
    setText(payload);
    //console.log(payload);
  };
  const addToDo = () => {
    if (text === "") {
      return;
    }
    const newToDo = Object.assign({}, toDos, {
      [Date.now()]: { text, work: working },
    });
    setToDos(newToDo);
    setText("");
  };

  /*
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  */

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Pressable onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </Pressable>
        <Pressable onPress={travel}>
          <Text
            style={{ ...styles.btnText, color: working ? theme.grey : "white" }}
          >
            Travel
          </Text>
        </Pressable>
      </View>
      <TextInput
        onSubmitEditing={addToDo}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        returnKeyType="done"
        placeholder={working ? "Add a To Do" : "Where do you want to go ?"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 17,
  },
});
