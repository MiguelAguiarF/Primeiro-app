import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile';
import Home from './screens/Home';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
        }}
        >
            <Tab.Screen options={{tabBarIcon:({color}) => <AntDesign name="home" size={24} color="black" />}}name="Home" component={Home}/>
            <Tab.Screen options={{tabBarIcon:({color}) => <MaterialCommunityIcons name="account-outline" size={24} color="black" /> }} name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}