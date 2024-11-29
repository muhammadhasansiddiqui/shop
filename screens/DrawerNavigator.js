import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";
import DetailsScreen from "./DetailsScreen";
import Notifications from "./Notifications";
import Favorites from "./FavoritesScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Group 88.png")}
          style={styles.drawerImage}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: "#1E1E1E" },
          headerTintColor: "white",
          drawerStyle: { backgroundColor: "#1E1E1E", width: 250 },
          drawerActiveTintColor: "#D17842",
          drawerInactiveTintColor: "white",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Icon
              name="menu"
              size={25}
              color="white"
              style={{ marginLeft: 15 }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      >
        <Drawer.Screen
          name="Home"
          component={BottomTabs}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            // headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="information-circle" color={color} size={size} />
            ),
            // headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="notifications" color={color} size={size} />
            ),
            // headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={Favorites}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            ),
            // headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  drawerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
