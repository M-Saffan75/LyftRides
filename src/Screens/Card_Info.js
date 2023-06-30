import React from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, Modal, TouchableOpacity, Text, View, Image, Animated } from 'react-native';

const Card_Info = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                    </TouchableOpacity>
                    <Text style={styles.categories}>Card Info</Text>
                    <Text style={{ color: COLOURS.white }}>Profile</Text>
                </View>
                <Animatable.View animation="slideInLeft" delay={0.01}>

                    <View style={styles.debit_card}>
                        <View style={styles.driver_debit_image}>
                            <View style={styles.debit_name_box}>
                                <Text style={styles.name_debit}>Debit</Text>
                                <Image source={require('../images/credit-card.png')} style={styles.img_credit_card} />

                            </View>
                            <View style={styles.debit_image_container}>
                                <Image source={require('../images/master-card.png')} style={styles.img_card} />
                            </View>
                        </View>

                        <Text style={styles.debit_number}>*** *** *** 0011</Text>

                        <View style={styles.debit_balance_box}>
                            <View>
                                <Text style={styles.debit_balance}></Text>
                                <Text style={styles.debit_money}>Driver Card</Text>
                            </View>
                            <TouchableOpacity activeOpacity={10} style={styles.top_btn}>
                                <Text style={styles.top_btn_text}>10 / 27</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>

                <View style={{ marginTop: '10%' }}></View>
                <Animatable.View animation="fadeInUp" delay={0.01}>
                    <View >
                        <View style={styles.inpt_box}>
                            <TextInput placeholder='Card Number' placeholderTextColor={'grey'} style={styles.inpt_here} />
                        </View>
                    </View>
                    <View >
                        <View style={styles.inpt_box}>
                            <TextInput placeholder='Card Owner' placeholderTextColor={'grey'} style={styles.inpt_here} />
                        </View>
                    </View>

                    <View style={styles.issue_expiry_container}>
                        <TextInput placeholder='Issue Date' placeholderTextColor={'grey'} style={styles.expiry_issue_date} keyboardType='numeric' />
                        <TextInput placeholder='Expiry Date' placeholderTextColor={'grey'} style={styles.expiry_issue_date} keyboardType='numeric' />
                    </View>
                </Animatable.View>
                <Animatable.View animation="flipInX" delay={0.01}>
                    <View style={styles.login_btn_box}>
                        <TouchableOpacity activeOpacity={0.6} style={styles.login_here_btn} onPress={() => navigation.navigate('Payment_Method')}>
                            <Text style={styles.login_here}>Add Card </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </ScrollView>
        </>
    )
}

export default Card_Info

const styles = StyleSheet.create({

    issue_expiry_container: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    expiry_issue_date: {
        width: '40%',
        fontSize: 12,
        borderWidth: 1,
        borderRadius: 10,
        color: COLOURS.black,
        paddingHorizontal: 10,
        fontFamily: 'Poppins-Regular',
        borderColor: COLOURS.lightborder,
        backgroundColor: COLOURS.white,

    },

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

    nav_notifi: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    categories: {
        right: 15,
        fontSize: 17,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    debit_card: {
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        paddingBottom: 10,
        paddingVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        backgroundColor: COLOURS.black,
    },

    driver_debit_image: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    debit_name_box: {
        flexDirection: 'column'
    },

    img_card: {
        height: 50,
        width: 50

    },
    name_debit: {
        color: COLOURS.grey,
        fontFamily: 'Poppins-Regular'
    },

    img_credit_card: {
        width: 30,
        height: 30,
        marginTop: 20,
    },

    driver_card: {
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    debit_number: {
        marginTop: 10,
        letterSpacing: .2,
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    debit_balance_box: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    debit_balance: {
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    debit_money: {
        fontSize: 18,
        color: COLOURS.white,
        fontFamily: 'Poppins-SemiBold',
    },

    top_btn_text: {
        top: 10,
        fontSize: 12,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Poppins-Bold',
    },

    login_btn_box: {
        marginVertical: 20,
        marginHorizontal: 20,
    },

    login_here_btn: {
        height: 50,
        padding: 15,
        marginTop: 10,
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

    inpt_box: {
        marginBottom: 5,
        marginHorizontal: 20,
    },

    inpt_here: {
        padding: 4,
        height: 60,
        fontSize: 14,
        width: '100%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 8,
        letterSpacing: .4,
        marginVertical: 5,
        paddingHorizontal: 10,
        fontFamily: 'Poppins-Regular',
        // backgroundColor: COLOURS.light,
        borderColor: COLOURS.lightborder,
    },

})