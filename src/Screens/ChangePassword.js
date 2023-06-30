import React from 'react';
import { COLOURS } from '../Components/ThemeColours';
// import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar } from 'react-native';

const ChangePassword = ({ navigation }) => {

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
            <ScrollView style={{ height: '100%', backgroundColor: COLOURS.white }}>

                <View style={{ height: '100%', width: '100%', backgroundColor: COLOURS.white }}>

                    <View style={styles.child_container}>
                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()} >
                            <MaterialIcons name='keyboard-arrow-left' style={styles.name} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.frgt_name}>Change Password</Text>
                        </View>

                        <Text style={styles.pswd_name}>New Password</Text>
                        <View>
                            <View>
                                <TextInput placeholder='New Password' placeholderTextColor={'grey'}
                                    style={styles.inpt_here}
                                />
                            </View>
                        </View>

                        <Text style={styles.cnfrmpswd_name}>Confirm Password</Text>
                        <View >
                            <View>
                                <TextInput placeholder='Confirm Password' placeholderTextColor={'grey'}
                                    style={styles.inpt_here}
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                            <Text style={{ color: 'white', fontSize: 12, paddingVertical: 15, textAlign: 'center', fontFamily: 'Roboto-Bold', letterSpacing: .5, }}>Change </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    child_container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    name: {
        width: 40,
        padding: 5,
        fontSize: 30,
        marginTop: 30,
        borderRadius: 7,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.apple,
        fontFamily: 'Roboto-Bold',
        backgroundColor: COLOURS.peach,
    },

    frgt_name: {
        fontSize: 25,
        marginTop: 60,
        letterSpacing: .5,
        paddingVertical: 10,
        color: COLOURS.apple,
        fontFamily: 'Roboto-Bold',
    },

    pswd_name: {
        width: '100%',
        fontSize: 16,
        marginTop: 40,
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: COLOURS.apple,
        fontFamily: 'Roboto-Medium',
    },

    cnfrmpswd_name: {
        width: '100%',
        fontSize: 16,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: COLOURS.apple,
        fontFamily: 'Roboto-Medium',
    },

    inpt_here: {
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
        letterSpacing: .3,
        marginVertical: 5,
        color: COLOURS.black,
        paddingHorizontal: 10,
        fontFamily: 'Roboto-Regular',
    },

    btn: {
        width: 300,
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: COLOURS.apple,
    },
})