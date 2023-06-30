import React, { useRef } from 'react';
import Top_Up from '../Screens/Top_Up';
import Profile from '../Screens/Profile';
import MapHere from '../Screens/MapHere';
import My_Wallet from '../Screens/My_Wallet';
import Card_Info from '../Screens/Card_Info';
import Added_Card from '../Screens/Added_Card';
import MapHereNext from '../Screens/MapHereNext'
import AddLocations from '../Screens/AddLocations';
import Notification from '../Screens/Notification';
import { COLOURS } from '../Components/ThemeColours';
import Entypo from 'react-native-vector-icons/Entypo';
import Payment_Method from '../Screens/Payment_Method';
import Transaction_History from '../Screens/Transaction_History';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, Image, StatusBar } from 'react-native';
import Destination from '../Screens/Destination';
import Top_Up_Wallet from '../Screens/Top_Up_Wallet';


const Profile_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
            <Stack.Screen name="Top_Up" component={Top_Up} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="My_Wallet" component={My_Wallet} />
            <Stack.Screen name="Card_Info" component={Card_Info} />
            <Stack.Screen name="Added_Card" component={Added_Card} />
            <Stack.Screen name="Top_Up_Wallet" component={Top_Up_Wallet} />
            <Stack.Screen name="Payment_Method" component={Payment_Method} />
            <Stack.Screen name="Transaction_History" component={Transaction_History} />
        </Stack.Navigator>
    )
}


const Notification_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Notification'>
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}


const Maps_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MapHere'>
            <Stack.Screen name="MapHere" component={MapHere} />
            <Stack.Screen name="MapHereNext" component={MapHereNext} />
            <Stack.Screen name="Destination" component={Destination} />
        </Stack.Navigator>
    )
}


const BottomNavigation = () => {


    const Tab = createBottomTabNavigator();
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarLabelStyle: { display: 'none' },
                tabBarStyle: {
                    backgroundColor: '#eee',
                    position: 'absolute',
                    /* bottom: 10,
                    marginHorizontal: 15, */
                    paddingBottom: 20,
                    paddingHorizontal: 7,
                    height: 55,
                    shadowColor: '#000',
                    showOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                }
            }}>
                <Tab.Screen name="'AddLocations" component={AddLocations} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Image source={require('../images/home.png')} style={{ height: 25, width: 25 }}
                                tintColor={focused ? COLOURS.purple : COLOURS.grey}

                            />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true
                        }).start();
                    }
                })}
                ></Tab.Screen>
                <Tab.Screen name="Maps_Here" component={Maps_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Image source={require('../images/map_long.png')} style={{ height: 25, width: 25 }}
                                tintColor={focused ? COLOURS.purple : COLOURS.grey}
                            />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth(),
                            useNativeDriver: true
                        }).start();
                    }
                })}>

                </Tab.Screen>
                <Tab.Screen name="Notification_Here" component={Notification_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Image source={require('../images/bell.png')} style={{ height: 25, width: 25 }}
                                tintColor={focused ? COLOURS.purple : COLOURS.grey}
                            />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 3.25,
                            useNativeDriver: true
                        }).start();
                    }
                })}
                ></Tab.Screen>
                <Tab.Screen name="Profile_Here" component={Profile_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Image source={require('../images/user.png')} style={{ height: 25, width: 25 }}
                                tintColor={focused ? COLOURS.purple : COLOURS.grey}
                            />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 4.3,
                            useNativeDriver: true
                        }).start();
                    }
                })}
                ></Tab.Screen>
            </Tab.Navigator>

            <Animated.View style={{
                width: getWidth() - 20,
                height: 3.5,
                backgroundColor: COLOURS.brown,
                position: 'absolute',
                bottom: 46.5,
                left: 22.5,
                borderRadius: 100,
                transform: [
                    { translateX: tabOffsetValue }
                ]
            }}>
            </Animated.View>
        </>
    )
}

function getWidth() {
    let width = Dimensions.get("window").width
    width = width - 45
    return width / 5
}

const About = () => {
    return (
        <View>
            <Text>About</Text>
        </View>
    )
}


function EmptyScreen() {
    return (
        <View>
        </View>
    );
}

export default BottomNavigation

const styles = StyleSheet.create({

    email: {
        width: '100%',
        textAlign: 'center',
        color: COLOURS.backgroundDark,
        fontFamily: 'Poppins-Medium'

    },
})