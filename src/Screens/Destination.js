import React, { useRef, useState } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, Modal, TouchableOpacity, Text, View, Image, Animated } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const Destination = ({ navigation }) => {

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                    </TouchableOpacity>
                    <Text style={styles.categories}>Add Info</Text>
                    <Text style={{ color: COLOURS.white }}>Profile</Text>
                </View>
                <View style={styles.destination_area}>
                    <Text style={styles.destination}>Destination</Text>
                </View>


                <View style={{ marginHorizontal: 15 }}>
                    <View style={styles.detail_time}>
                        <View style={styles.time_am}>
                            <Text style={styles.start_time}>Start Time</Text>
                            <Text style={styles.total_time}>6 AM</Text>
                        </View>
                        <Text style={styles.border}></Text>
                        <View style={styles.time_am}>
                            <Text style={styles.start_time}>Working Time</Text>
                            <Text style={styles.total_time}>9 Hours</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.car_section}>
                    <View style={styles.icon_info}>
                        <FontAwesome5 name='car' style={styles.icon_car} />
                        <Text style={styles.car_mile}>Max Miles</Text>
                    </View>
                    <View style={styles.icon_info}>
                        <FontAwesome5 name='car' style={styles.icon_car} />
                        <Text style={styles.car_mile}>Max Miles</Text>
                    </View>
                </View>

                <View style={styles.btn_modal_box}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.modal_here_btn} onPress={() => navigation.goBack()}>
                        <Text style={styles.modal_here_btn_text}>Save Details</Text>
                    </TouchableOpacity>
                  
                </View>
            </ScrollView>
        </>
    )
}

export default Destination

const styles = StyleSheet.create({

    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    iconStyle: {
        width: 20,
        height: 20,
        fontSize:20,
        color: COLOURS.black,
    },

    dropdown: {
        width: 150,
        borderWidth: 2,
        borderRadius: 10,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
        backgroundColor: COLOURS.lightborder
    },

    icon_car: {
        fontSize: 20,
        paddingHorizontal: 5,
        color: COLOURS.grey,
    },
    car_mile: {
        fontSize: 11,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium'
    },

    icon_info: {
        width: '42%',
        padding: 10,
        elevation: 2,
        borderRadius: 10,
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        backgroundColor: COLOURS.white,
    },

    car_section: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },

    btn_modal_box: {
        marginTop: 20,
        alignItems: 'center',
        marginHorizontal: 20
    },

    modal_here_btn: {
        padding: 10,
        width: '100%',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: COLOURS.blue,
    },

    modal_here_btn_text: {
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    border: {
        left: 10,
        width: 2,
        height: 40,
        backgroundColor: COLOURS.lightborder,
    },

    time_am: {
        lineHeight: 1,
        alignItems: 'center',
    },

    total_time: {
        color: COLOURS.black,
        fontFamily: 'Poppins-Regular',
    },

    start_time: {
        fontSize: 12,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium',
    },

    detail_time: {
        elevation: 2,
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: COLOURS.white,
    },

    destination: {
        fontSize: 20,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    destination_area: {
        marginVertical: 20,
        marginHorizontal: 20,
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

})