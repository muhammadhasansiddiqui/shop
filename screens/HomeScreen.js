import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // For Hamburger Icon

export default function Home({ navigation }) {
  const coffeeItems = [
    {
      id: 1,
      title: "Cappuccino",
      description: "With Steamed Milk",
      price: 4.2,
      imageUrl:
        "https://images.unsplash.com/photo-1706207283549-432cee9d58f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbG9jaGlzdGFufGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Espresso",
      description: "Strong and Bold",
      price: 3.5,
      imageUrl:
        "https://images.unsplash.com/photo-1721328291721-d9ea53f437b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbG9jaGlzdGFufGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "Americano",
      description: "Classic American Coffee",
      price: 3.8,
      imageUrl:
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Macchiato",
      description: "Espresso with Milk Foam",
      price: 4.5,
      imageUrl:
        "https://www.naseebiryani.com/cdn/shop/files/Asset_1.png?v=1727164410&width=360",
    },
    {
      id: 5,
      title: "Cappuccino",
      description: "With Steamed Milk",
      price: 4.2,
      imageUrl:
        "https://images.unsplash.com/photo-1706207283549-432cee9d58f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbG9jaGlzdGFufGVufDB8fDB8fHww",
    },
    {
      id: 6,
      title: "Cappuccino",
      description: "With Steamed Milk",
      price: 4.2,
      imageUrl:
        "https://images.unsplash.com/photo-1706207283549-432cee9d58f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbG9jaGlzdGFufGVufDB8fDB8fHww",
    },
    {
      id: 7,
      title: "Cappuccino",
      description: "With Steamed Milk",
      price: 4.2,
      imageUrl:
        "https://images.unsplash.com/photo-1706207283549-432cee9d58f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbG9jaGlzdGFufGVufDB8fDB8fHww",
    },
    {
      id: 8,
      title: "Cappuccino",
      description: "With Steamed Milk",
      price: 4.2,
      imageUrl:
        "https://images.unsplash.com/photo-1706207283549-432cee9d58f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbG9jaGlzdGFufGVufDB8fDB8fHww",
    },
    {
      id: 9,
      title: "Cappuccino",
      description: "With Steamed Milk",
      price: 4.2,
      imageUrl:
        "https://images.unsplash.com/photo-1706207283549-432cee9d58f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbG9jaGlzdGFufGVufDB8fDB8fHww",
    },
    {
      id: 10,
      title: "Cappuccino",
      description: "With Steamed Milk",
      price: 4.2,
      imageUrl:
        "https://images.unsplash.com/photo-1706207283549-432cee9d58f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbG9jaGlzdGFufGVufDB8fDB8fHww",
    },
  ];

  React.useLayoutEffect(() => {
    // Customize header
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={25} color="#fff" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />

      {/* Header */}
      <View style={styles.header}>
  <Text style={styles.headerText}>
    Find the best{'\n'}coffee for you
  </Text>
  <TextInput
    placeholder="Find Your Coffee..."
    style={styles.searchInput}
  />
</View>


      {/* Categories */}
      <View style={styles.categories}>
        {["All", "Cappuccino", "Espresso", "Americano", "Macchiato"].map(
          (category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      {/* Coffee Cards */} 
      {/* row 1 */}
      <ScrollView
        horizontal
        contentContainerStyle={styles.cardContainer}
        showsHorizontalScrollIndicator={false}
      >
        {coffeeItems.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <View style={styles.div}>
              <Text style={styles.cardPrice}>
                <Text style={{ color: "#D17845", paddingRight: 5 }}>$</Text>
                {item.price}
              </Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  console.log("Navigating to Details", item);
                  navigation.navigate("Details", {
                    itemId: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    imageUrl: item.imageUrl,
                  });
                }}
                
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

,
      {/* row 2 */}

<ScrollView
        horizontal
        contentContainerStyle={styles.cardContainer}
        showsHorizontalScrollIndicator={false}
      >
        {coffeeItems.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <View style={styles.div}>
              <Text style={styles.cardPrice}>
                <Text style={{ color: "#D17845", paddingRight: 5 }}>$</Text>
                {item.price}
              </Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  console.log("Navigating to Details", item);
                  navigation.navigate("Details", {
                    itemId: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    imageUrl: item.imageUrl,
                  });
                }}
                
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Styles remain the same
  container: { flex: 1, backgroundColor: "#1E1E1E" },
  header: { padding: 20 },
  headerText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    // textAlign: "center", // Center align the text
    lineHeight: 30, // Adjust line spacing
    marginTop:-20,
    marginBottom:10
  },
  
  searchInput: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  categories: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 5,
    backgroundColor: "#252A32",
  },
  categoryButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: "#1216B",
    borderRadius: 20,
  },
  categoryText: { color: "#fff" },
  cardContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 160,
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    marginTop: 20,
  },
  cardImage: { width: "100%", height: 150, borderRadius: 10 },
  cardTitle: { color: "#fff", fontSize: 16, marginVertical: 5 },
  cardDescription: { color: "#bbb", fontSize: 12 },
  cardPrice: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  addButton: {
    marginTop: 5,
    backgroundColor: "#D17845",
    borderRadius: 10,
    width: 35,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: { color: "#fff", fontSize: 16, textAlign: "center" },
  div: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
  },
});
