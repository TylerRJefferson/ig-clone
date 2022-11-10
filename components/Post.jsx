import { Text, Avatar } from "@rneui/themed";
import { View, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

export default function Post({ post, navigation }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.cardHeader} 
        onPress={() => navigation.navigate('Post Details', { itemId: post.id })}>
        <Avatar source={{ uri: post.profilePhoto}} rounded />
        <Text style={styles.userName}>{post.userName}</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: post.photoURL }}
        PlaceholderContent={<ActivityIndicator />} />
      <Text style={styles.description}>{post.description}</Text>
    </View>
  );
};