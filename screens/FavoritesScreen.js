import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Notifications = () => {
  const notifications = [
    { id: 1, title: "New Order Received", description: "You have a new coffee order to prepare." },
    { id: 2, title: "Low Stock Alert", description: "Your coffee beans stock is running low." },
    { id: 3, title: "New Message", description: "You have received a new message from your customer." },
    { id: 4, title: "Update Available", description: "A new update is available for the app." },
    // Add more notifications as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <ScrollView contentContainerStyle={styles.notificationsList}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notificationsList: {
    paddingBottom: 20,
  },
  notificationCard: {
    backgroundColor: "#333",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  notificationTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationDescription: {
    color: "#bbb",
    fontSize: 14,
  },
});

export default Notifications;
