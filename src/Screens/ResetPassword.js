import React from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';


const ResetPassword = ({ navigation }) => {

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ height: '100%', backgroundColor: COLOURS.white }}>


                <View style={styles.container}>
                    <View style={styles.child_container}>

                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()} >
                            <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                        </TouchableOpacity>
                        <Animatable.View animation="slideInLeft" delay={0.1}>

                            <View style={styles.name_box}>
                                <Text style={styles.name}>Create New Password</Text>
                            </View>

                            <View style={styles.frgt_box}>
                                <Text style={styles.frgt_text}>Your new password must be unique from those previously used.</Text>
                            </View>
                        </Animatable.View>
                        <Animatable.View animation="slideInRight" delay={0.1}>

                            <View>
                                <View style={styles.inpt_box}>
                                    <TextInput placeholder='New Password' placeholderTextColor={'grey'}
                                        style={styles.inpt_here}
                                        secureTextEntry
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={styles.inpt_box}>
                                    <TextInput placeholder='Confirm Password' placeholderTextColor={'grey'}
                                        style={styles.inpt_here}
                                        secureTextEntry
                                    />
                                </View>
                            </View>
                        </Animatable.View>
                        <Animatable.View animation="fadeInUp" delay={0.1}>
                            <View style={styles.btn_box}>
                                <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.navigate('Login')} >
                                    <Text style={styles.btn_name}>Reset Password</Text>
                                </TouchableOpacity>
                            </View>
                        </Animatable.View>
                    </View>
                </View>

            </ScrollView>
        </>
    )
}

export default ResetPassword

const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLOURS.white
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
        marginBottom: 10,
        textAlign: 'center',
        marginHorizontal: 30,
        paddingVertical: 10,
    },

    inpt_box: {
        marginBottom: 5,
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

    frgt_box: {
        marginHorizontal: 25,
        paddingBottom: 25,
    },

    frgt_text: {
        color: COLOURS.grey,
        fontSize: 13,
        lineHeight: 25,
        fontFamily: 'Poppins-Medium',
    },


})