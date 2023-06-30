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

const Ride_Complete = ({ navigation }) => {
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

                    <Animatable.View style={styles.payment_card_box} animation='fadeInUp' delay={0.1}>
                        <View style={styles.payment_card}>
                            <Text style={styles.payment_date}>jan 10 2023</Text>
                            <Text style={styles.payment_money}>$405.32</Text>
                            <Text style={styles.payment_ride_time}>Ride Complete in 30 Minutes</Text>
                        </View>
                    </Animatable.View>
                    <TouchableOpacity style={styles.payment_wallet_arrow} activeOpacity={0.8}>
                        <Text style={styles.payment_wallet}>See You're E Wallet</Text>
                        <FontAwesome5 name='long-arrow-alt-right' style={styles.payment_arow} />
                    </TouchableOpacity>

                    <View style={styles.paymeny_customer_card}>
                        <Text style={styles.payment_customer}>Customer Review</Text>
                        <View style={styles.payment_customer_star}>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name='star' style={styles.payment_star} />
                                <AntDesign name='star' style={styles.payment_star} />
                                <AntDesign name='star' style={styles.payment_star} />
                                <AntDesign name='star' style={styles.payment_star} />
                                <AntDesign name='star' style={styles.payment_star} />
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.payment_rating}>
                                <Text style={styles.payment_rating}>4.7 out of 5</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginVertical: 20 }}>

                        <Animatable.View style={styles.location_box} animation='slideInLeft' delay={0.1}>
                            <View style={styles.location_and_name}>
                                <FontAwesome5 name='map-marker-alt' style={styles.map_icon} />
                                <Text style={styles.stating_location}>Starting Location</Text>
                            </View>
                            <View style={styles.location_time_box}>
                                <Text style={styles.location_time}>9:40am</Text>
                            </View>
                        </Animatable.View>
                        <Animatable.View style={styles.location_down_arrow} animation='fadeInUp' delay={0.1}>
                            <FontAwesome name='long-arrow-down' style={styles.location_arrow} />
                        </Animatable.View>
                        <Animatable.View style={styles.location_box} animation='slideInRight' delay={0.1}>
                            <View style={styles.location_and_name}>
                                <FontAwesome5 name='map-marker-alt' style={[styles.map_icon, { color: COLOURS.green }]} />
                                <Text style={styles.stating_location}>Ending Location</Text>
                            </View>
                            <View style={styles.location_time_box}>
                                <Text style={styles.location_time}>10:10am</Text>
                            </View>
                        </Animatable.View>
                    </View>

                    <Animatable.View style={styles.ride_detail_box} animation='slideInLeft' delay={0.1}>
                        <Text style={styles.ride_detail}>Ride Details</Text>
                    </Animatable.View>

                    <View style={styles.ride_box_container}>

                        <Animatable.View style={styles.ride_box} animation='slideInLeft' delay={0.1}>
                            <View style={styles.icon_box}>
                                <MaterialCommunityIcons name='clock-time-five-outline' style={styles.time_icon} />
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: 10, }}>
                                <Text style={styles.start_name}>Start Time</Text>
                                <Text style={styles.start_time}>6 AM</Text>
                            </View>
                        </Animatable.View>

                        <Animatable.View style={styles.ride_box} animation='slideInRight' delay={0.5}>
                            <View style={styles.icon_box}>
                                <Ionicons name='md-hourglass-outline' style={styles.time_icon} />
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: 10, }}>
                                <Text style={styles.start_name}>Estimate Time</Text>
                                <Text style={styles.start_time}>30  mins</Text>
                            </View>
                        </Animatable.View>

                        <Animatable.View style={styles.ride_box} animation='slideInLeft' delay={0.5}>
                            <View style={styles.icon_box}>
                                <FontAwesome5 name='user-friends' style={styles.time_icon} />
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: 10, }}>
                                <Text style={styles.start_name}>Min Pay Out</Text>
                                <Text style={styles.start_time}>40$</Text>
                            </View>
                        </Animatable.View>

                        <Animatable.View style={styles.ride_box} animation='slideInRight' delay={0.5}>
                            <View style={styles.icon_box}>
                                <Ionicons name='car-sport-outline' style={styles.time_icon} />
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: 10, }}>
                                <Text style={styles.start_name}>Max Miles</Text>
                                <Text style={styles.start_time}>15 ml</Text>
                            </View>
                        </Animatable.View>

                    </View>

                    <View style={{ marginTop: '15%' }}></View>
                </View>
            </ScrollView>

        </>
    )
}

export default Ride_Complete

const styles = StyleSheet.create({

    location_arrow: {
        color: COLOURS.grey,
        fontSize: 35,
    },

    location_down_arrow: {
        marginVertical: 10,
        color: COLOURS.black,
        marginHorizontal: 31.5,
    },

    location_time: {
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    stating_location: {
        paddingLeft: 10,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',

    },

    map_icon: {
        fontSize: 22,
        color: COLOURS.blue,
    },

    location_and_name: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    location_box: {
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    ride_box: {
        width: 160,
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        marginHorizontal: 10,
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: COLOURS.light,
    },

    ride_box_container: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    start_name: {
        fontSize: 11,
        letterSpacing: .6,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Regular',
    },

    start_time: {
        fontSize: 12,
        letterSpacing: .6,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    time_icon: {
        padding: 10,
        fontSize: 20,
        color: COLOURS.grey,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    icon_box: {
        width: 43,
        height: 42,
        borderRadius: 10,
        textAlignVertical: 'center',
        backgroundColor: COLOURS.white,
    },

    ride_detail_box: {
        margin: 20,
        marginTop: 20,
        marginBottom: 0,
    },

    ride_detail: {
        fontSize: 18,
        letterSpacing: .4,
        color: COLOURS.black,
        fontFamily: 'Poppins-Regular',
    },

    payment_rating: {
        top: 1,
        fontSize: 11,
        color: COLOURS.grey,
        fontFamily: 'Poppins-SemiBold',
    },

    payment_star: {
        fontSize: 15,
        color: COLOURS.yellow,
    },

    payment_customer_star: {
        width: 165,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: COLOURS.light,
    },

    payment_customer: {
        fontSize: 13,
        marginTop: 20,
        marginVertical: 5,
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    paymeny_customer_card: {
        alignItems: 'center',
    },

    payment_arow: {
        top: 1,
        fontSize: 22,
        paddingLeft: 5,
        color: COLOURS.black,
    },

    payment_wallet: {
        padding: 5,
        fontSize: 14,
        color: COLOURS.black,
        textAlignVertical: 'center',
        fontFamily: 'Poppins-Medium',
    },

    payment_wallet_arrow: {
        height: 60,
        padding: 15,
        borderTopWidth: 1,
        marginVertical: 0,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: COLOURS.black,
        borderBottomColor: COLOURS.black,
    },

    payment_ride_time: {
        fontSize: 14,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium',
    },

    payment_money: {
        fontSize: 35,
        paddingTop: 7,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    payment_date: {
        fontSize: 15,
        paddingTop: 5,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium',
    },

    payment_card: {
        width: '100%',
        borderRadius: 10,
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: COLOURS.light,
    },

    payment_card_box: {
        marginVertical: 30,
        marginHorizontal: 20,
        alignItems: 'center',
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

})