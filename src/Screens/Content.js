import React from 'react'
import { COLOURS } from '../Components/ThemeColours'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Content = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.btn_container}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.login_here_btn} onPress={() => navigation.replace('ResetPassword')}>
                        <Text style={styles.login_here}>Verify </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.login_here_btn} onPress={() => navigation.replace('ResetPassword')}>
                        <Text style={styles.login_here}>Verify </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Content

const styles = StyleSheet.create({

    btn_container: {
        height:'100%',
        // marginHorizontal:20,
        backgroundColor:'red',
        flexDirection:'column',

        // alignContent:'flex-start',
        // alignContent:'center',
        // alignContent:'flex-end',
        justifyContent:'center',
        // alignItems:'flex-start',
    },

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
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
})