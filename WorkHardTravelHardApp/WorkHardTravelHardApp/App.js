import { StatusBar } from "expo-status-bar";
import { React, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable as PressableRaw,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
// https://www.npmjs.com/package/@react-native-async-storage/async-storage
// expo install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./colors";
import { Fontisto } from "@expo/vector-icons";

const STORAGE_KEY = "@toDos";

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

  useEffect(() => {
    // only first rendering -> toDosList load
    loadToDos();
  }, []);

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

  const deleteToDo = (key) => {
    Alert.alert("Delete To Do", "Are you sure ?", [
      { text: "Cancel" },
      {
        text: "I'm Sure",
        style: "destructive",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };

  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const loadToDos = async () => {
    const st = await AsyncStorage.getItem(STORAGE_KEY);
    st == null ? null : setToDos(JSON.parse(st));
  };

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    const newToDos = { ...toDos, [Date.now()]: { text, working } };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };
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
        placeholder={
          working ? "What do you have to do ?" : "Where do you want to go ?"
        }
      />
      <ScrollView>
        {toDos.length === 0 ? (
          <View>
            <ActivityIndicator
              style={{ marginTop: 10 }}
              color="white"
              size="large"
            />
          </View>
        ) : (
          Object.keys(toDos).map((key) =>
            toDos[key].working === working ? (
              <View style={styles.toDo} key={key}>
                <Text style={styles.toDoText}>{toDos[key].text}</Text>
                <Pressable onPress={() => deleteToDo(key)}>
                  <Fontisto name="trash" size={18} color={theme.grey} />
                </Pressable>
              </View>
            ) : null
          )
        )}
      </ScrollView>
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
    fontSize: 18,
    marginVertical: 20,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 18,
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
