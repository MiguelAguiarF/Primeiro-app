import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SGE from '../../assets/SGE.jpg';

export default function MyPosts() {
    return(
        <View style={styles.container}>
            <View style={styles.icons}>
                <TouchableOpacity>
                <Feather name="grid" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name="movie-open-play-outline" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name="account-outline" size={30} color="black" />
                </TouchableOpacity>

                </View>
             <View style={styles.postList}>
                    <Image style={styles.post} source={SGE} />
                    <Image style={styles.post} source={SGE} />
                    <Image style={styles.post} source={SGE} />
                    <Image style={styles.post} source={SGE} />
                    <Image style={styles.post} source={SGE} />
                    <Image style={styles.post} source={SGE} />
                    <Image style={styles.post} source={SGE} />
                    <Image style={styles.post} source={SGE} />
                    <Image style={styles.post} source={SGE} />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
    },

    icons:{
        flexDirection: "row",
        justifyContent: "space-around", 
    },

    postList:{
        marginTop: 20,
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap", 
    },

    post:{
        width: "33.3%",
        borderWidth:2,
        borderColor: "#fff",
        height: 150,
    },
});