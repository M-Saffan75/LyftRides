import React from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, Modal, TouchableOpacity, Text, View, Image, Animated } from 'react-native';

const AddLocations = ({navigation}) => {
    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                <View style={styles.nav_notifi}>
                    <Text style={{ color: COLOURS.white }}>Profile</Text>
                    <Text style={styles.categories}>Home</Text>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6}>
                        <Image source={require('../images/profile-1.jpg')} style={styles.profile_here} />
                    </TouchableOpacity>
                </View>
                <View style={styles.location_info_box}>
                    <Text style={styles.location_user}>Hi , user</Text>
                    <View style={styles.location_name}>
                        <Ionicons name='ios-location' style={styles.icon_location} />
                        <Text style={styles.add_location_name}>Orlando , Florida</Text>
                    </View>
                    <View style={styles.location_place_btn}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.add_location_btn} onPress={() => navigation.navigate('Destination')}>
                            <Text style={styles.add_location_btn_text}>add location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.select_max_location}>
                        <Text style={styles.you_add_location}>You're added Locations is 0</Text>
                        <Text style={styles.max_add_location}>You can select max 6 locations at a time</Text>
                    </View>
                </View>

                <View>
                    <Text style={{color:COLOURS.grey, textAlign:'center', marginTop:'50%'}}>Empty</Text>
                </View>

            </ScrollView>
        </>
    )
}

export default AddLocations

const styles = StyleSheet.create({

    max_add_location : {
        fontSize:13,
        color:COLOURS.grey,
        fontFamily:'Poppins-Regular'
    },

    you_add_location : {
        fontSize:15,
        color:COLOURS.black,
        fontFamily:'Poppins-Medium',
    },

    select_max_location : {
        marginVertical:15,
    },

    add_location_btn_text : {
        padding:3,
        fontSize:10,
        color:COLOURS.white,
        textTransform: 'uppercase',
        fontFamily:'Poppins-Medium',
    },

    add_location_btn : {
        padding:8,
        borderRadius:5,
        backgroundColor:COLOURS.blue,
    },

    location_place_btn : {
        alignItems:'flex-end'
    },

    add_location_name : {
        fontSize:13,
        color:COLOURS.grey,
        paddingHorizontal:5,
        fontFamily:'Poppins-Medium',
    },

    icon_location : {
        fontSize:20,
        color:COLOURS.blue,
    },

    location_name : {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },

    location_user: {
        fontSize:22,
        color:COLOURS.black,
        fontFamily:'Poppins-Medium',
    },

    location_info_box : {
        marginHorizontal:20,
    },


    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    btn_align: {
        marginHorizontal: 20,
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
        left: 15,
        fontSize: 17,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    profile_here: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },

})