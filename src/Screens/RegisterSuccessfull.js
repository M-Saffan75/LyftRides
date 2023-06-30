import React from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';


const RegisterSuccessfull = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ height: '100%', backgroundColor: COLOURS.white }}>
                <View style={styles.container}>
                    <Animatable.View animation='fadeInUp' delay={0.1}>
                        <View style={{ marginTop: '50%' }}></View>

                        <View style={styles.image_box}>
                            <Image source={require('../images/Vector.png')} style={styles.success_image} />
                        </View>

                        <Text style={styles.registr_name}>Registered</Text>
                        <Text style={styles.registr_para}>Your Are Registered Successfully</Text>
                        <View style={styles.btn_box}>
                            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.navigate('BottomNavigation')} >
                                <Text style={styles.btn_name}>Back To Login</Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </View>
            </ScrollView>
        </>
    )
}

export default RegisterSuccessfull

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLOURS.white
    },

    btn_box: {
        marginHorizontal: 20,
    },

    btn: {
        height: 50,
        width: '100%',
        marginTop: 25,
        borderRadius: 5,
        paddingVertical: 16,
        backgroundColor: COLOURS.blue,
    },

    btn_name: {
        color: 'white',
        fontSize: 12,
        letterSpacing: .9,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
    },

    image_box: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    success_image: {
        height: 100,
        width: 100,

    },

    registr_name: {
        fontSize: 23,
        marginVertical: 15,
        color: COLOURS.black,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },

    registr_para: {
        fontSize: 13,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    },
})