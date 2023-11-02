import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import bg from "../../assets/background.png";
import light from "../../assets/light.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ImageBackground } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"; // make font and width / height responseive in all divice
import { useAuthStore } from "../store";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const { token, addToken } = useAuthStore((state) => state);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = () => {
    if (Username === "admin" && Password === "admin") {
      console.log("success login");
      console.log(Username, Password);
      addToken("initoken-success-login-oke!!!");
      //   navigation.navigate("Home");
    } else {
      console.log("auth failed");
      console.log(Username, Password);
    }
  };

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image source={bg} className="w-full h-full absolute" />
      <View className="w-full flex-row justify-around absolute">
        <Image source={light} style={{ width: wp(20), height: hp(23) }} />
        <Image source={light} style={{ width: wp(13), height: hp(15) }} />
      </View>
      {/* title and form  */}
      <View className="w-full h-full flex justify-around pt-40 pb-10 z-2">
        <Text
          className="font-bold tracking-wider text-center text-white"
          style={{ fontSize: hp(5) }}
        >
          Login
        </Text>
        <View className=" flex items-center w-full space-y-5 px-5">
          <View className="bg-black/5 rounded-2xl p-5 w-full">
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              value={Username}
              onChangeText={setUsername}
            />
          </View>
          <View className="bg-black/5 rounded-2xl p-5 w-full">
            <TextInput
              secureTextEntry
              placeholder="Password"
              value={Password}
              // autoCapitalize="none"
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity
            className=" bg-sky-500 rounded-2xl p-3 w-full"
            onPress={handleSubmit}
          >
            <Text className="font-bold text-center text-white text-xl">
              Login
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            className=" bg-sky-500 rounded-2xl p-3 w-full"
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="font-bold text-center text-white text-xl">
              home
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}
