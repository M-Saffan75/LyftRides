import axios from 'axios';
import { ASSET_URL, BASE_URL } from './Config';
import React, { useEffect, useState } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native';

const My_Wallet = ({ navigation }, props) => {

    const [customer, setCustomer] = useState([]);
    const [money, setMoney] = useState();
    const [imagehere, setImageHere] = useState(null);


    useEffect(() => {
        userdata()
    }, [])

    const userdata = async () => {
        let usertoken = await AsyncStorage.getItem("token");
        if (usertoken != null) {
            await axios({
                method: 'get',
                url: BASE_URL + '/loggeduser',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${usertoken}`,
                }
            })
                .then(function (response) {
                    // console.log(response.data)
                    let namehere = response.data.TransactionHistory;
                    setCustomer(namehere)
                    // console.log(customer)
                    setMoney(response.data.user.wallet)
                    setImageHere(response.data.user.image)
                    // console.log(imagehere)
                })

                .catch(function (error) {
                    console.log(error)
                })
        }
    }


    return (
        <>

            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                    </TouchableOpacity>
                    <Text style={styles.categories}>My E-Wallet</Text>
                    <Text style={{ color: COLOURS.white }}>Profile</Text>
                </View>

                <Animatable.View animation="slideInLeft" delay={0.1}>

                    <View style={styles.debit_card}>
                        <View style={styles.driver_debit_image}>
                            <View style={styles.debit_name_box}>
                                <Text style={styles.name_debit}>Debit</Text>
                                <Text style={styles.driver_card}>Driver Card</Text>
                            </View>
                            <View style={styles.debit_image_container}>
                                <Image source={require('../images/master-card.png')} style={styles.img_card} />
                            </View>
                        </View>

                        <Text style={styles.debit_number}>*** *** *** 0011</Text>

                        <View style={styles.debit_balance_box}>
                            <View>
                                <Text style={styles.debit_balance}>Your Balaance</Text>
                                <Text style={styles.debit_money}>{money}</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={styles.top_btn} onPress={() => navigation.navigate('Top_Up_Wallet')}>
                                <Text style={styles.top_btn_text}>Top Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Animatable.View>
                <Animatable.View animation="fadeInRight" delay={0.1}>
                    <View style={styles.see_categorie}>
                        <Text style={styles.categories_Here}>Transactions History</Text>
                        <TouchableOpacity style={styles.see_all} onPress={() => navigation.navigate('Transaction_History')} activeOpacity={0.8}>
                            <Text style={styles.see}>See All</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" delay={0.1}>

                    {customer.map((customerhistoryhere) => {
                        return <View key={customerhistoryhere.id} style={styles.transaction_area}>
                            <View>
                                {
                                    imagehere == null ?
                                        <Image source={require('../images/profile-1.jpg')} style={styles.profile_wallet_1} />
                                        :
                                        <Image source={{ uri: ASSET_URL + imagehere }} style={styles.profile_wallet_1} />
                                }
                            </View>
                            <View style={styles.name_date}>
                                <Text style={styles.wallet_name}>{customerhistoryhere.customer_name}</Text>
                                <Text style={styles.wallet_date}>{customerhistoryhere.time} </Text>
                            </View>
                            <View style={styles.money_image}>
                                <Text style={styles.wallet_money}>{customerhistoryhere.payments}</Text>
                                <Image source={require('../images/upward-arrow.png')} style={styles.upward_arrow} />
                            </View>
                        </View>
                    })
                    }

                </Animatable.View>

                <View style={{ marginTop: '15%' }}></View>
            </ScrollView>
        </>
    )
}

export default My_Wallet

const styles = StyleSheet.create({
    transaction_area: {
        paddingHorizontal: 20,
        marginVertical: 10,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    name_date: {
        width: '65%',
        flexDirection: 'column',
    },

    wallet_name: {
        fontSize: 15.5,
        // letterSpacing:.4,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    wallet_date: {
        fontSize: 12,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium',
    },

    money_image: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    profile_wallet_1: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },

    wallet_money: {
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold'
    },

    upward_arrow: {
        width: 20,
        height: 20,
    },

    down_arrow: {
        width: 20,
        height: 20,
    },

    top_btn: {
        top: 15,
        padding: 4,
        width: 100,
        borderRadius: 15,
        backgroundColor: COLOURS.white,
    },

    top_btn_text: {
        fontSize: 12,
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    debit_card: {
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        paddingVertical: 20,
        paddingBottom: 10,
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

    driver_card: {
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    debit_number: {
        letterSpacing: .2,
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    debit_balance_box: {
        marginVertical: 5,
        marginBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    debit_balance: {
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    debit_money: {
        color: COLOURS.white,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        paddingTop: 10,
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
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    see_categorie: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    categories_Here: {
        fontSize: 16,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    see: {
        padding: 5,
        fontSize: 12,
        fontSize: 13,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Poppins-Medium',
    },

    see_all: {
        height: 30,
        width: 60,
        borderRadius: 10,
    },

})