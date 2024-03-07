import {View} from 'react-native'
import InfoProfile from '../components/InfoProfile';
import SO from "C:/Users/Instrutor/Desktop/teste/src/assets/SO.png";
import  MyPosts from '../components/MyPosts';


export default function Profile() {
  return (
    <View style={{
      flex: 1,
      marginVertical: 32,
      marginHorizontal: 16,
    }}>

    <InfoProfile 
    image={SO}
    publi={250}
    followers={2500}
    following={20}
    />

    <MyPosts />

    </View>
  )
}