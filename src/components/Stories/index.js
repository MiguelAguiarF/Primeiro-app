import { StyleSheet, ScrollView } from 'react-native';
import SO from './src/assets/SO.png';
import SGE from './src/assets/SGE.jpg';
import Story from './src/components/Story';

export default function Stories() {
    return (
        <ScrollView
        contentContainerStyle={styles.container} horizontal
        showsHorizontalScrollIndicator={false}>
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