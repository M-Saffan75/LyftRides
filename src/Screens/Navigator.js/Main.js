import React, { useEffect, useState } from 'react';
import Login from '../Screens/Login';
import { Easing } from 'react-native';
import Top_Up from '../Screens/Top_Up';
import OtpHere from '../Screens/OtpHere';
import Profile from '../Screens/Profile';
import Welcome from '../Screens/Welcome';
import Content from '../Screens/Content';
import Register from '../Screens/Register';
import Card_Info from '../Screens/Card_Info';
import My_Wallet from '../Screens/My_Wallet';
import Added_Card from '../Screens/Added_Card';
import OnBoarding from '../Screens/OnBoarding';
import Destination from '../Screens/Destination';
import MapHereNext from '../Screens/MapHereNext';
import BottomNavigation from './BottomNavigation';
import AddLocations from '../Screens/AddLocations';
import Notification from '../Screens/Notification';
import Top_Up_Wallet from '../Screens/Top_Up_Wallet';
import Ride_Complete from '../Screens/Ride_Complete';
import ResetPassword from '../Screens/ResetPassword';
import Payment_Method from '../Screens/Payment_Method';
import ChangePassword from '../Screens/ChangePassword';
import ForgotPassword from '../Screens/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Transaction_History from '../Screens/Transaction_History';
import RegisterSuccessfull from '../Screens/RegisterSuccessfull';
import AsyncStorage from '@react-native-async-storage/async-storage';


// const isLoggedIn = async () => {
//     const token = await AsyncStorage.getItem('token');
//     console.log(token)
//     return token !== null;
// };

const Main = () => {

    const [token, setToken] = useState(null);


    useEffect(() => {
        checkLogin();
    }, [])

    const checkLogin = async () => {

        let t = await AsyncStorage.getItem("token");
        console.log(t)

    }

    // const [loggedIn, setLoggedIn] = useState(false);

    // useEffect(() => {
    //     isLoggedIn().then(result => {
    //         setLoggedIn(result);
    //         console.log(loggedIn)
    //     });
    // }, []);

    const config = {
        animation: 'spring',
        config: {
            stiffness: 200,
            damping: 80,
            overshootClamping: false,
            resDisplacementThreshold: 0.1,
            restSpeedThreshold: 0.1
        }
    }
    const closeConfig = {
        animation: 'timing',
        config: {
            duration: 300,
            easing: Easing.linear
        }
    }

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            {token == null ?
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    // ...TransitionPresets.SlideFromRightIOS,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    transitionSpec: {
                        open: config,
                        close: closeConfig
                    },
                    initialRouteName: 'BottomNavigation'
                }}
                    animation='slide'
                    >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
                    <Stack.Screen name="OtpHere" component={OtpHere} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                </Stack.Navigator>
                :
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    
                }}>
                    <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
                    <Stack.Screen name="Top_Up" component={Top_Up} />
                    <Stack.Screen name="Content" component={Content} />
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="My_Wallet" component={My_Wallet} />
                    <Stack.Screen name="Card_Info" component={Card_Info} />
                    <Stack.Screen name="OnBoarding" component={OnBoarding} />
                    <Stack.Screen name="Added_Card" component={Added_Card} />
                    <Stack.Screen name="MapHereNext" component={MapHereNext} />
                    <Stack.Screen name="Destination" component={Destination} />
                    <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="AddLocations" component={AddLocations} />
                    <Stack.Screen name="Top_Up_Wallet" component={Top_Up_Wallet} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} />
                    <Stack.Screen name="Ride_Complete" component={Ride_Complete} />
                    <Stack.Screen name="Payment_Method" component={Payment_Method} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} />
                    <Stack.Screen name="Transaction_History" component={Transaction_History} />
                    <Stack.Screen name="RegisterSuccessfull" component={RegisterSuccessfull} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            }
        </NavigationContainer >
    )
}

export default Main
