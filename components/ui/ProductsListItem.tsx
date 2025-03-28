import products from "@/assets/data/products";
import { StyleSheet, View } from "react-native";
import ProductCard from "./ProductCard";

function ProductsListItem() {
  return (
    <View style={styles.productsContainer}>
      {products.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </View>
  );
}

export default ProductsListItem;

const styles = StyleSheet.create({
  productsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10",
  },
});
