import {View} from 'react-native'
import InfoProfile from './src/components/InfoProfile';
import SO from './src/assets/SO.png';


export default function App() {
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

    </View>
  )
}