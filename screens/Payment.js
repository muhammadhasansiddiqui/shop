import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import vector icons

export default function PaymentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Credit Card Section */}
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>Credit Card</Text>
        <View style={styles.card}>
          {/* Card image */}
          <Image
            source={require("../assets/visaCard.png")} // Correct path to your image
            style={styles.cardImage}
          />
        </View>
      </View>

      {/* Payment Options */}
      <View style={styles.paymentOptions}>
        {/* Wallet */}
        <TouchableOpacity style={styles.paymentButton}>
          <Icon name="card" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.paymentText}>Wallet</Text>
          <Text style={styles.amount}>$100.50</Text>
        </TouchableOpacity>

        {/* Google Pay */}
        <TouchableOpacity style={styles.paymentButton}>
          <Icon name="google-wallet" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.paymentText}>Google Pay</Text>
        </TouchableOpacity>

        {/* Apple Pay */}
        <TouchableOpacity style={styles.paymentButton}>
          <Icon name="apple" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.paymentText}>Apple Pay</Text>
        </TouchableOpacity>

        {/* Amazon Pay */}
        <TouchableOpacity style={styles.paymentButton}>
          <Icon name="amazon" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.paymentText}>Amazon Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Total Price and Pay Button */}
      <View style={styles.footer}>
        <Text style={styles.price}>Price: $4.20</Text>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => alert("Payment Successful!")}
        >
          <Text style={styles.payButtonText}>Pay from Credit Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 20,
  },
  cardContainer: {
    alignItems: "center",
    marginBottom: 8,
    marginTop: 10,
  },
  card: {
    width: 300,
    height: 180,
    borderRadius: 15,
    backgroundColor: "#292929",
    overflow: "hidden",
    borderWidth: 2, // Border thickness
    borderColor: "#D17842", // Border color
    padding: 10, // Padding inside the card
    position: "relative",
  },
  cardText: {
    position: "absolute", // Position the text at the top-left
    top: -30,
    left: 30,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ensures the image fits properly
  },
  paymentOptions: {
    marginVertical: 20,
  },
  paymentButton: {
    flexDirection: "row",
    alignItems: "center", // Align icon and text vertically
    justifyContent: "space-between",
    backgroundColor: "#292929",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
  paymentText: {
    flex: 1, // Allow text to take up available space
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
  amount: {
    fontSize: 16,
    color: "#D17842",
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  price: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: "#D17842",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  payButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
