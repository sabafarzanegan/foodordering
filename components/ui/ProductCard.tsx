import { Product } from "@/assets/types";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={{
        pathname: "/(tabs)/menu/[id]",
        params: { id: product.id.toString() },
      }}
      asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image as string }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}$</Text>
      </Pressable>
    </Link>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },

  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
