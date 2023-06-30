import React, { useEffect, useState } from 'react'
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Geolocation from '@react-native-community/geolocation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform, StatusBar, Switch, Slider, ScrollView } from 'react-native'

const MapHereNext = ({ navigation }) => {

    const [mode, setMode] = useState(false);

    const [rangeValue, setRangeValue] = useState(0);

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
                {/* <StatusBar translucent  backgroundColor={'transparent'} barStyle='transparent'/> */}
            <View style={{ height: '100%', width: '100%', backgroundColor: COLOURS.white }}>

                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps

                    style={{ height: '100%', width: '100%' }}
                    region={{
                        latitude: 33.93911,
                        longitude: 67.709953,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}>
                    <Marker
                        coordinate={{
                            latitude: 33.93911,
                            longitude: 67.709953,
                        }}>
                        <Image source={require('../images/Destination.png')} style={{ height: 50, width: 50, color: COLOURS.red }} />

                    </Marker>

                    <Marker
                        coordinate={{
                            latitude: 38.9697,
                            longitude: 59.5563,
                        }}>
                        <Image source={require('../images/Destination.png')} style={{ height: 50, width: 50, color: COLOURS.red }} />
                    </Marker>
                    <Marker
                        coordinate={{
                            latitude: 34.8021,
                            longitude: 38.9968,
                        }}>
                        <Image source={require('../images/Destination.png')} style={{ height: 50, width: 50, color: COLOURS.red }} />
                    </Marker>


                </MapView>

                <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()} >
                    <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                </TouchableOpacity>

                {/* <View style={styles.ride_details_box}>
                    <View style={styles.border_top_here_box}><View style={styles.border_top_here}></View></View>
                    <View style={styles.switch_title_box}>
                        <Text style={styles.ride_here}>Ride Details</Text>
                        <Switch value={mode} onValueChange={() => setMode((value) => !value)} />
                    </View>

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

                    <View style={styles.btn_here}>
                        <Animatable.View animation="fadeInUp" delay={0.1}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.login_here_btn} >
                                <Text style={styles.login_here}>Shedule Ride </Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </View> */}

                {/*  */}
                {/* <ScrollView horizontal> */}
                <View style={styles.ride_other_details_box}>
                    <View style={styles.border_top_here_box}><View style={styles.border_top_here}></View></View>
                    <View style={styles.switch_other_title_box}>
                        <Text style={styles.ride_here}>Radius</Text>
                        <Text style={styles.ride_here_km}>{rangeValue} km</Text>
                    </View>
                    <Slider
                        style={{ width: '100%', height: 30, }}
                        minimumValue={2}
                        maximumValue={30}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#000000"
                        onValueChange={setRangeValue}
                        step={1}
                    />

                    <Text style={styles.ride_dateile}>Details</Text>

                    <View style={styles.ride_box_other_container}>
                        <Animatable.View style={styles.ride_other_box} animation='slideInLeft' delay={0.1}>
                            <View style={styles.icon_box}>
                                <MaterialCommunityIcons name='clock-time-five-outline' style={styles.time_icon} />
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: 10, }}>
                                <Text style={styles.start_name}>Start Time</Text>
                                <Text style={styles.start_time}>6 AM</Text>
                            </View>
                        </Animatable.View>

                        <Animatable.View style={styles.ride_other_box} animation='slideInRight' delay={0.5}>
                            <View style={styles.icon_box}>
                                <Ionicons name='md-hourglass-outline' style={styles.time_icon} />
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: 10, }}>
                                <Text style={styles.start_name}>Estimate Time</Text>
                                <Text style={styles.start_time}>30  mins</Text>
                            </View>
                        </Animatable.View>

                        <Animatable.View style={styles.ride_other_box} animation='slideInLeft' delay={0.5}>
                            <View style={styles.icon_box}>
                                <FontAwesome5 name='user-friends' style={styles.time_icon} />
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: 10, }}>
                                <Text style={styles.start_name}>Min Pay Out</Text>
                                <Text style={styles.start_time}>40$</Text>
                            </View>
                        </Animatable.View>

                        <Animatable.View style={styles.ride_other_box} animation='slideInRight' delay={0.5}>
                            <View style={styles.icon_box}>
                                <Ionicons name='car-sport-outline' style={styles.time_icon} />
                            </View>
                            <View style={{ flexDirection: 'column', paddingLeft: 10, }}>
                                <Text style={styles.start_name}>Max Miles</Text>
                                <Text style={styles.start_time}>15 ml</Text>
                            </View>
                        </Animatable.View>

                    </View>
                    <View style={{ flexDirection: 'row', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={styles.btn_other_here}>
                            <Animatable.View animation="fadeInUp" delay={0.1} >
                                <TouchableOpacity activeOpacity={0.8} style={[styles.login_other_here_btn, { backgroundColor: COLOURS.darkyellow }]} onPress={() => navigation.navigate('Destination')}>
                                    <Text style={[styles.login_here, { color: COLOURS.black }]}>edit details </Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        </View>
                        <View style={styles.btn_other_here}>
                            <Animatable.View animation="fadeInUp" delay={0.1}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.login_other_here_btn} >
                                    <Text style={styles.login_here}>save details </Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        </View>
                    </View>
                </View>
                {/* </ScrollView> */}

            </View>
        </>
    )
}

export default MapHereNext

const styles = StyleSheet.create({

    btn_other_here: {
        marginTop: 5,
        marginHorizontal: 20,
    },

    login_other_here_btn: {
        height: 40,
        padding: 13,
        marginTop: 5,
        width: '98%',
        borderRadius: 30,
        paddingHorizontal: 30,
        backgroundColor: COLOURS.blue,
    },

    border_top_here: {
        height: 5,
        width: 40,
        borderRadius: 15,
        backgroundColor: COLOURS.grey,
    },

    ride_other_details_box: {
        bottom: 50,
        height: 350,
        width: '100%',
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLOURS.light,
        elevation: 21,
    },

    switch_other_title_box: {
        marginTop: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    ride_other_here_km: {
        fontSize: 12,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium',
    },

    ride_dateile: {
        fontSize: 16,
        letterSpacing: .7,
        marginVertical: 4,
        color: COLOURS.black,
        marginHorizontal: 15,
        fontFamily: 'Poppins-Regular',
    },

    ride_other_box: {
        width: 160,
        padding: 12,
        borderRadius: 10,
        marginVertical: 8,
        alignItems: 'center',
        marginHorizontal: 10,
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: COLOURS.lighter,
    },

    ride_box_other_container: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    ride_here_km: {
        fontSize: 12,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium',
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
        backgroundColor: COLOURS.lighter,
    },

    ride_box_container: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    ride_here: {
        fontSize: 17,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
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

    switch_title_box: {
        marginTop: 20,
        marginVertical: 0,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    border_top_here_box: {
        marginTop: 10,
        alignItems: 'center',
    },

    btn_here: {
        marginTop: 5,
        marginHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    login_here: {
        fontSize: 11,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        textTransform: 'uppercase',
        fontFamily: 'Poppins-SemiBold',
    },

    login_here_btn: {
        height: 40,
        padding: 13,
        marginTop: 5,
        width: '60%',
        borderRadius: 30,
        paddingHorizontal: 40,
        backgroundColor: COLOURS.blue,
    },

    border_top_here: {
        height: 5,
        width: 40,
        borderRadius: 15,
        backgroundColor: COLOURS.grey,
    },

    ride_details_box: {
        bottom: 50,
        height: 320,
        width: '100%',
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLOURS.light,
        elevation: 21,
    },

    btn_align: {
        top: -20,
        margin: 20,
        marginHorizontal: 20,
        position: 'absolute',
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
        top: 10,
        margin: 30,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    categories: {
        left: 10,
        fontSize: 17,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    profile_here: {
        right: 10,
        height: 40,
        width: 40,
        borderRadius: 50,
    },

    add_location_name: {
        fontSize: 13,
        color: COLOURS.grey,
        paddingHorizontal: 5,
        fontFamily: 'Poppins-Medium',
    },

    icon_location: {
        fontSize: 20,
        color: COLOURS.blue,
    },

    location_name: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    location_user: {
        fontSize: 22,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    location_info_box: {
        marginHorizontal: 20,
        paddingBottom: 10,
    },

})