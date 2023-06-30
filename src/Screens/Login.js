import axios from 'axios';
import { BASE_URL } from './Config';
import React, { useEffect, useState } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';


const Login = ({ navigation }) => {

    useEffect(() => {
        checkLogin();
    }, [])

    const [phone, setPhone] = useState('')
    const [token, setToken] = useState(null);
    const [license, setLicense] = useState('')
    const [alreadyexist, setAlreadyExist] = useState('')

    const [phone_number, setPhone_Number] = useState(false);
    const [lincsnmbererror, setLincsNmberError] = useState(false);


    const checkLogin = async () => {

        let t = await AsyncStorage.getItem("token");

        if (t != null) {
            navigation.replace('BottomNavigation');
            console.log(token)
        }
    }

    const setAuth = async (token) => {
        try {
            await AsyncStorage.setItem("token", token);
            setToken(token);
            console.log(await AsyncStorage.getItem("token"))
        } catch (error) {
            Promise.reject(error);
        }
    };

    const LoginHere = () => {

        if (phone.length == '' || license.length == '') {
            setPhone_Number(true)
            setLincsNmberError(true)
        }

        else if (phone.length != '' || license.length != '') {
            setPhone_Number(false)
            setLincsNmberError(false)
        }

        else if (license.length == '') {
            setLincsNmberError(true)
        }

        else if (license.length != '') {
            setLincsNmberError(false)
        }

        const data = {
            mobile_no: phone,
            driving_licence_no: license
        }

        axios.post(BASE_URL + '/login-with-mobile-and-dl',
            data,
        )
            .then(function (response) {
                console.log(response.data)
                if (response.data.status == 200 && response.data.token) {
                    setAuth(response.data.token);
                    navigation.replace('BottomNavigation');
                }
                else if (response.data.status == 404) {
                    setAlreadyExist('Something went Wrong !');
                }
            })
            .catch(function (error) {
                console.log(error);
            })  
    }

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ height: '100%', backgroundColor: COLOURS.white }}>


                <View style={styles.container}>
                    <View style={styles.child_container}>

                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()} >
                            <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                        </TouchableOpacity>

                        <Animatable.View animation={'slideInDown'} delay={0.1} >
                            <View style={styles.name_box}>
                                <Text style={styles.name}>Welcome Back ! Glad To See You Again</Text>
                            </View>
                        </Animatable.View>
                        {/*  */}

                        <Animatable.View animation='flipInX' delay={0.01}>
                            <Text style={styles.already_error}>{alreadyexist}</Text>
                        </Animatable.View>

                        {/*  */}
                        <Animatable.View animation={'slideInLeft'} delay={0.1}>
                            <View>
                                <View style={styles.inpt_box}>
                                    <TextInput placeholder='Enter Your Phone Number' keyboardType='name-phone' placeholderTextColor={'grey'}
                                        style={styles.inpt_here}
                                        maxLength={14}
                                        onChangeText={setPhone}
                                    />
                                </View>
                            </View>

                            {phone_number == true ? (
                                <Animatable.View animation='flipInX' delay={0.01} style={{ display: phone.length >= 2 ? 'none' : 'flex' }}>
                                    <Text style={styles.phone_error}>Phone Number is Required*</Text>
                                </Animatable.View>
                            ) : null
                            }

                            <View>
                                <View style={styles.inpt_box}>
                                    <TextInput placeholder='Driving License Number' keyboardType='numeric' placeholderTextColor={'grey'}
                                        style={styles.inpt_here}
                                        maxLength={7}
                                        onChangeText={setLicense}
                                    />
                                </View>
                            </View>

                            {lincsnmbererror == true ? (
                                <Animatable.View animation='flipInX' delay={0.01} style={{ display: license.length >= 2 ? 'none' : 'flex' }}>
                                    <Text style={styles.phone_error}>Driving License is Required*</Text>
                                </Animatable.View>
                            ) : null
                            }

                        </Animatable.View>
                        <Animatable.View animation={'slideInUp'} delay={0.1}>

                            {/* <View style={styles.frgt_box}>
                                <TouchableOpacity style={{}} onPress={() => navigation.replace('ForgotPassword')} activeOpacity={0.8}>
                                    <Text style={styles.forgotpassword}>Forgot Password ?</Text>
                                </TouchableOpacity>
                            </View> */}
                            <View style={styles.btn_box}>
                                <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={LoginHere}>
                                    <Text style={styles.btn_name}>Login</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={{ width: '70%', }} onPress={() => navigation.replace('Register')} activeOpacity={0.8}>
                                <Text style={styles.alreadyaccount}>Don't Have an Account ?</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </View>

            </ScrollView>
        </>
    )
}

export default Login

const styles = StyleSheet.create({

    already_error: {
        top: -10,
        fontSize: 15,
        color: COLOURS.red,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },

    phone_error: {
        fontSize: 13,
        color: COLOURS.red,
        marginHorizontal: 25,
        fontFamily: 'Poppins-Medium',
    },

    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
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

    name_box: {
        width: '85%',
        marginBottom: 20,
        textAlign: 'center',
        marginHorizontal: 30,
        paddingVertical: 10,
    },

    inpt_box: {
        marginBottom: 7,
        marginHorizontal: 20,
    },

    name: {
        lineHeight: 35,
        fontSize: 25,
        marginTop: 50,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    inpt_names: {
        width: '100%',
        fontSize: 16,
        letterSpacing: .5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: COLOURS.apple,
        fontFamily: 'Poppins-Medium',
    },

    inpt_here: {
        height: 60,
        fontSize: 14,
        width: '100%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 8,
        letterSpacing: .4,
        marginVertical: 5,
        paddingHorizontal: 10,
        fontFamily: 'Roboto-Regular',
        backgroundColor: COLOURS.light,
        borderColor: COLOURS.lightborder,
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

    btn_box: {
        marginHorizontal: 20,
    },

    alreadyaccount: {
        fontSize: 12,
        marginTop: 20,
        color: '#1b1b1b',
        textAlign: 'left',
        letterSpacing: .3,
        paddingHorizontal: 30,
        fontFamily: 'Poppins-Medium',
    },

    frgt_box: {
        justifyContent: 'flex-end', alignItems: 'flex-end'
    },

    forgotpassword: {
        fontSize: 12,
        marginTop: 20,
        color: '#1b1b1b',
        letterSpacing: .3,
        paddingHorizontal: 30,
        fontFamily: 'Poppins-Medium',
    },

})