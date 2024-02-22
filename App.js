import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from './src/components/header';

export default function App() {
  return (
    <View>

      <Header />

      <ScrollView
        contentContainerStyle={{ gap: 8 }}
        horizontal
        style={{ flexDirection: "row", marginHorizontal: 5 }}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "black" }} source={{ uri: "https://origins.sonicthehedgehog.com/image/characters_640.png" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "black" }} source={{ uri: "https://pbs.twimg.com/profile_images/1677317803555147776/DFWSeOZc_400x400.jpg" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "black" }} source={{ uri: "https://origins.sonicthehedgehog.com/image/characters_640.png" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "black" }} source={{ uri: "https://pbs.twimg.com/profile_images/1677317803555147776/DFWSeOZc_400x400.jpg" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "black" }} source={{ uri: "https://origins.sonicthehedgehog.com/image/characters_640.png" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "black" }} source={{ uri: "https://pbs.twimg.com/profile_images/1677317803555147776/DFWSeOZc_400x400.jpg" }} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}