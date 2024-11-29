import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./BottomTabs"; // Import Bottom Tabs
import DetailsScreen from "./DetailsScreen"; // Import screen for Drawer
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#1E1E1E" },
        drawerActiveTintColor: "#D17842",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="information-circle" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
