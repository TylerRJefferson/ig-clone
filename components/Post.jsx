import { Card, Text, Avatar, Icon } from "@rneui/themed";
import { View, ActivityIndicator, Image } from "react-native";
import styles from "../styles";

export default function Post({ post }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: post.photoURL }}
        PlaceholderContent={<ActivityIndicator />} />
      <Text style={styles.description}>{post.description}</Text>
    </View>
  );
};