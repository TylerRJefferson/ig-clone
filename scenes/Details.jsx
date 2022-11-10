import Post from "../components/Post";
import photoList from "../photolist";


export default function Details({ route: { params: { itemId } }, navigation }) {
  const post = photoList.find(photo => photo.id === itemId)
  return (
    <Post post={post} navigation={navigation} />
  );
}