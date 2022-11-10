import { ScrollView } from "react-native";
import Post from "../components/Post";
import styles from "../styles";
import photoList from "../photolist";

export default function Feed() {
  return (
    <ScrollView style={styles.feed}>
      {photoList.map(photo => (
        <Post post={photo} key={photo.id}/>
      ))}
    </ScrollView>
  );
};

