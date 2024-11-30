import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the hook

export default function Cart({ route }) {
  const { title, price, size, imageUrl } = route.params;
  const navigation = useNavigation(); // Get navigation via hook

  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.size}>Size: {size}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>
      </View>

      {/* Total Price Section */}
      <View style={styles.footer}>
        <Text style={styles.totalPrice}>Total Price: ${price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate("Payment")} // Navigation works now
        >
          <Text style={styles.payButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#252A32",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  size: {
    fontSize: 14,
    color: "#bbb",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: "#D17842",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  totalPrice: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: "#D17842",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  payText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
