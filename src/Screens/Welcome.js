import React from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

const Welcome = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            {/* <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: COLOURS.grey }}> */}
                <View style={styles.container}>

                    <Animatable.View style={styles.welcome_image_box} animation="zoomIn" delay={0.1}>
                        <Image source={require('../images/welcome-1.jpg')} style={styles.welcome_image} />
                        <Image source={require('../images/positioning.png')} style={styles.welcome_image_map} />
                    </Animatable.View>

                    <View style={styles.btn_group_here}>
                        <Animatable.View animation="zoomInLeft" delay={0.1}>
                            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.btn_name}>Login</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View animation="zoomInLeft" delay={0.1}>
                            <TouchableOpacity style={styles.btn_2} activeOpacity={0.8} onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.btn_name_2}>Register</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </View>
            {/* </ScrollView> */}
        </>
    )
}

export default Welcome

const styles = StyleSheet.create({

    container: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: COLOURS.white,
    },

    welcome_image_box: {
        alignItems: 'center',
        // marginTop: 30,
    },

    welcome_image: {
        height: 300,
        width: 300
    },

    welcome_image_map: {
        height: 150,
        width: 150,
        marginTop:20,
    },


    btn_group_here: {
        marginHorizontal: 20,
    },

    btn: {
        height: 55,
        width: '100%',
        marginTop: 25,
        borderRadius: 5,
        paddingVertical: 18,
        backgroundColor: COLOURS.blue,
    },

    btn_name_2: {
        fontSize: 12,
        letterSpacing: .9,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Poppins-Medium',
    },

    btn_2: {
        height: 55,
        width: '100%',
        marginTop: 25,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 18,
        borderColor: COLOURS.blue,
    },

    btn_name: {
        fontSize: 12,
        letterSpacing: .9,
        color: COLOURS.white,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
    },
})