import { StyleSheet, ScrollView, Image } from 'react-native';
import SO from 'C:/Users/Instrutor/Desktop/teste/src/assets/SO.png';
import SGE from 'C:/Users/Instrutor/Desktop/teste/src/assets/SGE.jpg';
import Story from 'C:/Users/Instrutor/Desktop/teste/src/components/Story';

export default function Stories() {
    return (
        <ScrollView
        contentContainerStyle={styles.container} horizontal
        showsHorizontalScrollIndicator={false}>
             <Story image={SO} />
             <Story image={SGE} />
             <Story image={SO} />
             <Story image={SGE} />
             <Story image={SO} />
             <Story image={SGE} />
             <Story image={SO} />
             <Story image={SGE} />
             <Story image={SO} />
             <Story image={SGE} />
        </ScrollView>
    )}

const styles = StyleSheet.create({
    container:{
        gap:8,
        height:100,
    },
})