import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { useAuthStore } from "../store";

const Stack = createNativeStackNavigator();
export default function NavigationApp() {
  const { token } = useAuthStore((state) => state);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        {token ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </>
        )}
        {/* <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
