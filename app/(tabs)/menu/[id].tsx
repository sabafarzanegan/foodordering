import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "DetailsPage" }} />
      <Text style={{ color: "white" }}>{id}</Text>
    </View>
  );
};

export default ProductDetail;
