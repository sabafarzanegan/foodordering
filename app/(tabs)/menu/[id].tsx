import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import products from "@/assets/data/products";
import Colors from "@/constants/Colors";
import { useState } from "react";
import Button from "@/components/ui/Button";
const sizes = ["S", "M", "L", "XL"];
const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const { id } = useLocalSearchParams();
  const product = products.find((item) => item.id.toString() == (id as string));
  if (!product) {
    return <Text>product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={{ color: "#FFECDB", marginVertical: 5 }}>Selectsize</Text>
      <View style={styles.sizeBox}>
        {sizes.map((size, i) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[
              styles.sizes,
              {
                backgroundColor:
                  selectedSize === size ? "#FF9149" : "gainsboro",
              },
            ]}>
            <Text key={i}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>{product.price}$</Text>
      <View>
        <Button text="Add to cart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    color: "#FFECDB",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  sizeBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  sizes: {
    color: "black",
    width: 50,
    backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    aspectRatio: 1,
  },
});

export default ProductDetail;
