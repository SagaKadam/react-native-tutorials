import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Main() {
  return (
    <View style={{ padding: 50}}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <TextInput placeholder="Course Goal" style={{ borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, width: "80%" }} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

