import React from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ScrollView, } from 'react-native';


const Top_Up_Wallet = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ height: '100%', backgroundColor: COLOURS.white }}>


                <View style={styles.container}>
                    <View style={styles.child_container}>
                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()} >
                            <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.txt_here}>
                        <Text style={styles.txt_here_text}>Enter amount of Top Up </Text>
                    </View>

                    <View style={styles.input_conatiner_here}>
                        <View style={styles.inpt_container}>
                            <TextInput placeholder='' style={styles.inpt_money} maxLength={8} defaultValue='$0.00' keyboardType='numeric' />
                        </View>
                    </View>

                    <View style={styles.money_container}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.inpt_value_here}>
                            <Text style={styles.mony_value}>$10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.inpt_value_here}>
                            <Text style={styles.mony_value}>$20</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.inpt_value_here}>
                            <Text style={styles.mony_value}>$30</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.inpt_value_here}>
                            <Text style={styles.mony_value}>$40</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.inpt_value_here}>
                            <Text style={styles.mony_value}>$50</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.inpt_value_here}>
                            <Text style={styles.mony_value}>$60</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.inpt_value_here}>
                            <Text style={styles.mony_value}>$70</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.inpt_value_here}>
                            <Text style={styles.mony_value}>$80</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.inpt_value_here}>
                            <Text style={styles.mony_value}>$90</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.btn_here}>
                        <Animatable.View animation="fadeInUp" delay={0.1}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.login_here_btn} onPress={() => navigation.navigate('Top_Up')} >
                                <Text style={styles.login_here}>Continue </Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                    
                </View>
            </ScrollView>
        </>
    )
}

export default Top_Up_Wallet

const styles = StyleSheet.create({

    input_conatiner_here: {
        marginBottom:40,
        marginHorizontal:40,
    },

    inpt_money: {
        fontSize:25,
        height:100,
        width:'100%',
        textAlign:'center',
        color: COLOURS.black,
        // backgroundColor:'red',
        fontFamily: 'Poppins-SemiBold',
    },

    inpt_container: {
        width: '100%',
        height: 120,
        borderWidth: 1,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: COLOURS.blue,
        justifyContent: 'center',
    },

    inpt_value_here: {
        width: 100,
        height: 35,
        padding: 6,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: COLOURS.blue,
    },

    mony_value: {
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Poppins-Medium',
    },

    money_container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
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

    txt_here: {
        marginHorizontal: 20,
    },

    btn_here: {
        marginHorizontal: 20,
    },

    txt_here_text: {
        marginTop: 30,
        fontSize: 16,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
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