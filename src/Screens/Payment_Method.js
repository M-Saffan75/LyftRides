import React from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, Modal, TouchableOpacity, Text, View, Image, Animated } from 'react-native';

const Payment_Method = ({ navigation }) => {

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                    </TouchableOpacity>
                    <Text style={styles.categories}>Select Payment Method</Text>
                    <Text style={{ color: COLOURS.white }}>Profile</Text>
                </View>

                <View style={{ marginTop: '10%' }}></View>
                <Animatable.View animation="slideInLeft" delay={0.1}>

                    <View style={styles.pswd_inpt_container}>
                        <TextInput placeholder='Cash' placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} keyboardType='numeric' />
                        <Image source={require('../images/s.png')} style={{ height: 20, width: 20, }} />
                    </View>

                    <View style={styles.pswd_inpt_container}>
                        <TextInput placeholder='Master Card' placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} keyboardType='numeric' />
                        <Image source={require('../images/master-card.png')} style={{ height: 30, width: 30, }} />
                    </View>
                    <View style={styles.pswd_inpt_container}>
                        <TextInput placeholder='Visa' placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} keyboardType='numeric' />
                        <Image source={require('../images/visa.png')} style={{ height: 30, width: 40, right: 5 }} />
                    </View>

                </Animatable.View>
                <Animatable.View animation="slideInLeft" delay={0.1}>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Card_Info')}>
                        <Text style={styles.card_added}>Added Card</Text>
                    </TouchableOpacity>

                </Animatable.View>
                <Animatable.View animation="fadeInUp" delay={0.1}>
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
            </ScrollView>
        </>
    )
}

export default Payment_Method

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

    nav_notifi: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    categories: {
        // right: 15,
        fontSize: 15,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    pswd_inpt_container: {
        height: 58,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        paddingVertical: 5,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderColor: COLOURS.blue,
        justifyContent: 'space-around',
    },

    pswd_inpt: {
        width: '100%',
        letterSpacing: .5,
        paddingVertical: 10,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    card_added: {
        fontSize: 17,
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    debit_card: {
        padding: 10,
        marginTop: 20,
        marginBottom:20,
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
        height: 30,
        width: 30
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

})