import {ScrollView, View, Image} from 'react-native';
import Header from '../components/header';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import Post from 'C:/Users/Instrutor/Desktop/teste/src/assets/SH.png';
import pfp from 'C:/Users/Instrutor/Desktop/teste/src/assets/SGE.jpg'

export default function Home() {
    return (
      <ScrollView        
       style={{
        marginVertical: 32
        }}>


        <Header />
        <Stories />
        <Posts
        profileImage={pfp}
        postImage={Post}
        profileName='Shadow The Hedghog'
        description='aaaaaaaaaaaaaaaa'
        />

        <Posts
        profileImage={pfp}
        postImage={Post}
        profileName='Shadow The Hedghog'
        description='aaaaaaaaaaaaaaaa'
        />

        <Posts
        profileImage={pfp}
        postImage={Post}
        profileName='Shadow The Hedghog'
        description='aaaaaaaaaaaaaaaa'
        />
      </ScrollView>
    );
}