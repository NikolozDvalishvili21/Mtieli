import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={() => console.log("image tapped")}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
