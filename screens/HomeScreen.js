import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Find the best coffee for you</Text>
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
      <View style={styles.cardContainer}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={{
                uri: "https://www.naseebiryani.com/cdn/shop/files/Asset_1.png?v=1727164410&width=360",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Cappuccino</Text>
            <Text style={styles.cardDescription}>With Steamed Milk</Text>
            <Text style={styles.cardPrice}>$4.20</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1e1e1e" },

  header: { padding: 20 },
  headerText: { color: "#fff", fontSize: 24, fontWeight: "bold", 
    marginBottom: 10,
   },
  searchInput: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  categories: { flexDirection: "row", marginHorizontal: 20, marginTop: 20 },
  categoryButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 20,
  },
  categoryText: { color: "#fff" },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  card: {
    width: 150,
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  cardImage: { width: "100%", height: 100, borderRadius: 10 },
  cardTitle: { color: "#fff", fontSize: 16, marginVertical: 5 },
  cardDescription: { color: "#bbb", fontSize: 12 },
  cardPrice: { color: "#fff", fontSize: 14, fontWeight: "bold", marginTop: 5 },
  addButton: {
    marginTop: 10,
    backgroundColor: "#ff6600",
    borderRadius: 50,
    padding: 5,
    alignItems: "center",
  },
  addButtonText: { color: "#fff", fontSize: 16 },
});
