import { StatusBar } from 'expo-status-bar';
import Feed from './scenes/Feed';

export default function App() {
  return (
    <>
      <Feed />
      <StatusBar style="auto" />
    </>
  );
}
