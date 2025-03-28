import products from "@/assets/data/products";
import { FlatList, StyleSheet, View } from "react-native";
import ProductCard from "./ProductCard";

function ProductsListItem() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }} //between column
      columnWrapperStyle={{ gap: 10 }} //between product item
    />
  );
}

export default ProductsListItem;
