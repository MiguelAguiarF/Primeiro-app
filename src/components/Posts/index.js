import {View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Entypo, AntDesign, Fontisto, Ionicons } from '@expo/vector-icons';

export default function Posts({profileImage,
    postImage,
    profileName,
    description}) {
    return(
        <View style={styles.container}>
            <View style={styles.post}>
           <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop:7,
           }}>
           <Image source={profileImage} style={{width:80, height:80, borderRadius:50,}} />
           <Text style={{flex:1, marginLeft:15, fontSize:18,}}>{profileName}</Text>
           <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
            </View>
                <Image style={{width:'95%', marginVertical:10}} source={postImage} />
            <View style={{flexDirection:'row', width:'95%'}}>
                <View style={{flexDirection:'row', flex:1}}>
                <Entypo name="heart-outlined" size={30} color="black" />
                <AntDesign name="message1" size={24} color="black" />
                <Fontisto name="paper-plane" size={24} color="black" />
                </View>

                <View>
                <Ionicons name="bookmarks-outline" size={24} color="black" />
                </View>
            </View>
            <Text style={{fontSize:15, width:'95%'}}>{description}</Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center'
    },
    post: {
        width: '95%',
        backgroundColor:'white',
        marginVertical:25,
        alignItems:'center'
    },
})