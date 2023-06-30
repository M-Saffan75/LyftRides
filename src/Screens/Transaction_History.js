import axios from 'axios';
import { ASSET_URL, BASE_URL } from './Config';
import React, { useEffect, useState } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

const Transaction_History = ({ navigation }) => {

    const [customer, setCustomer] = useState([]);
    const [money, setMoney] = useState();
    const [timehere, setTime_Here] = useState();
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
                    console.log(response.data)
                    let namehere = response.data.TransactionHistory;
                    setCustomer(namehere)
                    console.log(customer)
                    console.log(customer.time)

                    setMoney(response.data.user.name)
                    // console.log(money)

                    setTime_Here(response.data.TransactionHistory.time)
                    // console.log(timehere)

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
                    <Text style={styles.categories}>Transaction History</Text>
                    <Text style={{ color: COLOURS.white }}>Profile</Text>
                </View>
                <Animatable.View animation="slideInLeft" delay={1}>
                    <View style={styles.see_categorie}>
                        <Text style={styles.categories_Here}>Transaction History</Text>
                        <TouchableOpacity style={styles.see_all} onPress={() => navigation.navigate('Transaction_History')} activeOpacity={0.8}>
                            <Text style={styles.see}>
                                <Ionicons name='md-hourglass-outline' style={styles.history_icon} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
                <Animatable.View animation="zoomIn" delay={1}>

                    {customer.map((transactionhere) => {
                        return <View style={styles.transaction_area} key={transactionhere.id}>
                            <View>
                                {
                                    imagehere == null ?
                                        <Image source={require('../images/profile-1.jpg')} style={styles.profile_wallet_1} />
                                        :
                                        <Image source={{ uri: ASSET_URL + imagehere }} style={styles.profile_wallet_1} />
                                }
                            </View>
                            <View style={styles.name_date}>
                                <Text style={styles.wallet_name}>{transactionhere.customer_name}</Text>
                                <Text style={styles.wallet_date}>{transactionhere.time}</Text>
                            </View>

                            <View style={styles.money_image}>
                                <Text style={styles.wallet_money}>{transactionhere.payments}</Text>
                                <Image source={require('../images/upward-arrow.png')} style={styles.upward_arrow} />
                            </View>
                        </View>
                    })}


                </Animatable.View>
                <View style={{ marginTop: '15%' }}></View>
            </ScrollView>
        </>
    )
}

export default Transaction_History

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
        fontSize: 14,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    wallet_date: {
        fontSize: 14,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium',
    },

    money_image: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    profile_wallet_1: {
        width: 50,
        height: 50,
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
        height: 50,
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
        fontFamily: 'Poppins-Bold',
    },

    see: {
        padding: 5,
        fontSize: 12,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Poppins-Medium',
    },

    history_icon: {
        fontSize: 30,
        color: COLOURS.black,
    },
})