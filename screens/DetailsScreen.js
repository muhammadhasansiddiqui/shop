import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function DetailsScreen({ route }) {
  const { title, description, price, imageUrl } = route.params;

  const [selectedSize, setSelectedSize] = useState("250gm");
  const sizes = ["250gm", "500gm", "1000gm"];

  return (
    <ScrollView style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        {/* Size Selection */}
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.sizeButtonSelected,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextSelected,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  imageContainer: {
    width: "100%",
    height: 240,
  },
  image: {
    width: "100%",
    height: 400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsContainer: {
    padding: 20,
    marginTop:100,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#bbb",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 10,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#252A32",
  },
  sizeButtonSelected: {
    backgroundColor: "#D17842",
  },
  sizeText: {
    fontSize: 14,
    color: "#fff",
  },
  sizeTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#333",
    backgroundColor: "#1E1E1E",
  },
  price: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#D17842",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  addToCartText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
