import { Product } from "@/assets/types";
import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ProductCard({ product }: { product: Product }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image as string }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}$</Text>
    </View>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
