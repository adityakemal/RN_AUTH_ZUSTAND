import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuthStore, useHomeStore } from "../store";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const { token, logout } = useAuthStore((state) => state);
  const { increasePopulation, bears } = useHomeStore((state) => state);
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center bg-black/10">
      <View className="bg-white rounded-3xl p-4 space-y-7">
        <View>
          <Text className="text-4xl">Home screen</Text>
        </View>
        <View>
          <Text className="text-2xl">BEARS : {bears} </Text>
          <TouchableOpacity
            className="bg-sky-500 p-5 rounded-full"
            onPress={increasePopulation}
          >
            <Text className="text-center text-white text-bold text-2xl">
              Add Bears
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-xl">token : {token}</Text>
          <TouchableOpacity className="bg-sky-500 p-5 rounded-full">
            <Text
              className="text-center text-white text-bold text-2xl"
              onPress={logout}
            >
              Logout/ remove token
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
