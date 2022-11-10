import { ScrollView } from "react-native";
import Post from "../components/Post";
import styles from "../styles";
import photoList from "../photolist";

export default function Feed({ navigation }) {
  return (
    <ScrollView style={styles.feed}>
      {photoList.map(photo => (
        <Post post={photo} navigation={navigation} key={photo.id}/>
      ))}
    </ScrollView>
  );
};

