import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import logo from './assets/Logo.png';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
      <Image style={{width:150, height:50}} source={logo} />

      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity >
        <Feather style={{marginRight: 25}} name="heart" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 style={{}} name="facebook-messenger" size={24} color="black" />
      </TouchableOpacity>
      </View>
      </View>
      <ScrollView 
        contentContainerStyle={{gap:8}}
        horizontal
        style={{flexDirection:"row", marginHorizontal:5}}
        showsHorizontalScrollIndicator={false}
      >
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.vecteezy.com%2Farte-vetorial%2F4274236-pessoa-icone-usuario-interface-icone-silhueta-de-homem-simbolo-simples-um-simbolo-glifo-em-seu-site-design-logo-app-ui-webinar-video-chat&psig=AOvVaw3jq1siUzPUB5T05n4Vcxdh&ust=1707584924124000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCBpLDsnoQDFQAAAAAdAAAAABAD" }} />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.vecteezy.com%2Farte-vetorial%2F4274236-pessoa-icone-usuario-interface-icone-silhueta-de-homem-simbolo-simples-um-simbolo-glifo-em-seu-site-design-logo-app-ui-webinar-video-chat&psig=AOvVaw3jq1siUzPUB5T05n4Vcxdh&ust=1707584924124000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCBpLDsnoQDFQAAAAAdAAAAABAD"}} />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.vecteezy.com%2Farte-vetorial%2F4274236-pessoa-icone-usuario-interface-icone-silhueta-de-homem-simbolo-simples-um-simbolo-glifo-em-seu-site-design-logo-app-ui-webinar-video-chat&psig=AOvVaw3jq1siUzPUB5T05n4Vcxdh&ust=1707584924124000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCBpLDsnoQDFQAAAAAdAAAAABAD"}} />
          </TouchableOpacity>          
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.vecteezy.com%2Farte-vetorial%2F4274236-pessoa-icone-usuario-interface-icone-silhueta-de-homem-simbolo-simples-um-simbolo-glifo-em-seu-site-design-logo-app-ui-webinar-video-chat&psig=AOvVaw3jq1siUzPUB5T05n4Vcxdh&ust=1707584924124000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCBpLDsnoQDFQAAAAAdAAAAABAD"}} />
          </TouchableOpacity>          
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.vecteezy.com%2Farte-vetorial%2F4274236-pessoa-icone-usuario-interface-icone-silhueta-de-homem-simbolo-simples-um-simbolo-glifo-em-seu-site-design-logo-app-ui-webinar-video-chat&psig=AOvVaw3jq1siUzPUB5T05n4Vcxdh&ust=1707584924124000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCBpLDsnoQDFQAAAAAdAAAAABAD"}} />
          </TouchableOpacity>          
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.vecteezy.com%2Farte-vetorial%2F4274236-pessoa-icone-usuario-interface-icone-silhueta-de-homem-simbolo-simples-um-simbolo-glifo-em-seu-site-design-logo-app-ui-webinar-video-chat&psig=AOvVaw3jq1siUzPUB5T05n4Vcxdh&ust=1707584924124000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCBpLDsnoQDFQAAAAAdAAAAABAD"}} />
          </TouchableOpacity>          
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 17.5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
});