import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs"; // Import Bottom Tabs
import DetailsScreen from "./DetailsScreen"; // Import extra screen
import Icon from "react-native-vector-icons/Ionicons"; // For Drawer Icons
import Notifications from "./Notifications";

const Drawer = createDrawerNavigator();

// Custom Drawer Content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Top Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Group 88.png")} // Path to your image
          style={styles.drawerImage}
        />
      </View>
      {/* Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#1E1E1E",
            width: 250, // Adjust drawer width here
          },
          drawerActiveTintColor: "#D17842",
          drawerInactiveTintColor: "white",
        }}
      >
        {/* HomeTabs */}
        <Drawer.Screen
          name="Home"
          component={BottomTabs}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />

        {/* Details Screen */}
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
        {/* notification */}
        <Drawer.Screen
           name="Notifications"
           component={Notifications}
           options={{
            drawerIcon: ({ color, size }) => (
               <Icon name="notifications" color={color} size={size} />
             ),
             headerShown: false,
          }}
        />





      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Styles for the custom drawer
const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginVertical: 20, // Space around the image
  },
  drawerImage: {
    width: 100, // Adjust image width
    height: 100, // Adjust image height
    borderRadius: 50, // Make it circular (if needed)
  },
});
