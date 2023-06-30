import React, { useRef } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';

const OtpHere = ({ navigation }) => {

    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.replace('Login')}>
                    <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                </TouchableOpacity>


                <View style={styles.short_container}>

                    <Animatable.View animation="slideInLeft" delay={0.1}>
                        <View style={styles.name_line}>
                            <Text style={styles.login_name}>OTP Verification</Text>
                        </View>
                        <View style={styles.frgt_box}>

                            <Text style={styles.frgt_text}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                        </View>
                    </Animatable.View>

                    <Text style={styles.your_name}>O T P</Text>
                    <Animatable.View animation="fadeInUp" delay={0.1}>
                        <View style={styles.otp_Container}>
                            <TextInput style={styles.name_inpt} keyboardType='numeric' ref={et1} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et2.current.focus();
                                    }
                                    else if (txt.length < 1) {
                                        et1.current.focus();
                                    }
                                }} />
                            <TextInput style={styles.name_inpt} keyboardType='numeric' ref={et2} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et3.current.focus();
                                    } else if (txt.length < 1) {
                                        et1.current.focus();
                                    }
                                }} />
                            <TextInput style={styles.name_inpt} keyboardType='numeric' ref={et3} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et4.current.focus();
                                    } else if (txt.length < 1) {
                                        et2.current.focus();
                                    }
                                }} />
                            <TextInput style={styles.name_inpt} keyboardType='numeric' ref={et4} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et4.current.focus();
                                    } else if (txt.length < 1) {
                                        et3.current.focus();
                                    }
                                }} />
                        </View>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" delay={0.1}>
                        <TouchableOpacity activeOpacity={0.6} style={styles.login_here_btn} onPress={() => navigation.replace('ResetPassword')}>
                            <Text style={styles.login_here}>Verify </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>

            </ScrollView>
        </>
    )
}

export default OtpHere

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    icon_name: {
        width: 45,
        padding: 5,
        fontSize: 30,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 7,
        textAlign: 'center',
        color: COLOURS.black,
        paddingHorizontal: 16,
        fontFamily: 'Poppins-SemiBold',
        borderColor: COLOURS.lightborder,
        backgroundColor: COLOURS.light,
    },

    short_container: {
        marginTop: 20,
        marginHorizontal: 20,
    },

    login_name: {
        fontSize: 25,
        marginTop: 30,
        textAlign: 'left',
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    login_line: {
        top: 5,
        right: 30,
        height: 4,
        width: 40,
        borderRadius: 10,
        backgroundColor: COLOURS.blue,
    },

    your_name: {
        fontSize: 17,
        marginTop: 20,
        paddingBottom: 30,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    otp_Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    name_inpt: {
        width: 50,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        color: COLOURS.black,
        backgroundColor: COLOURS.light,
        borderColor: COLOURS.lightborder,
    },

    inpt_container: {
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: COLOURS.blue,
    },

    icon: {
        width: 20,
        fontSize: 17,
        color: COLOURS.blue,
    },

    login_here_btn: {
        height: 50,
        padding: 15,
        marginTop: 40,
        width: '100%',
        borderRadius: 5,
        backgroundColor: COLOURS.blue,
    },

    login_here: {
        fontSize: 13,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium',
    },

    frgt_box: {
        paddingVertical: 25,
        paddingBottom: 0,
    },

    frgt_text: {
        color: COLOURS.grey,
        fontSize: 13,
        lineHeight: 25,
        fontFamily: 'Poppins-Medium',
    },

})