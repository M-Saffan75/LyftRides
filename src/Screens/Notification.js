import React from 'react';
import { COLOURS } from '../Components/ThemeColours'
import Entypo from 'react-native-vector-icons/Entypo'
import * as Animatable from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, Modal, TouchableOpacity, Text, View, Image, Animated } from 'react-native';

const Notification = ({navigation}) => {
    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                <View style={styles.nav_notifi}>
                    <Text style={{ color: COLOURS.white }}>Profile</Text>
                    <Text style={styles.categories}>Notification</Text>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} >
                        <Image source={require('../images/profile-1.jpg')} style={styles.profile_here} />
                    </TouchableOpacity>
                </View>
                <Animatable.View animation={'slideInLeft'} delay={0.1}>
                    <View style={styles.location_info_box}>
                        <Text style={styles.location_user}>Hi , user</Text>
                        <View style={styles.location_name}>
                            <Ionicons name='ios-location' style={styles.icon_location} />
                            <Text style={styles.add_location_name}>Orlando , Florida</Text>
                        </View>
                    </View>

                    <View style={styles.see_categorie}>
                        <Text style={styles.categories_Here}>Notifications</Text>
                        <TouchableOpacity style={styles.see_all} onPress={() => navigation.navigate('Transaction_History')} activeOpacity={0.8}>
                            <Text style={styles.see}>
                                {/* <AntDesign name='message1'  /> */}
                                <MaterialCommunityIcons name='message-badge'style={styles.history_icon} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
                <Animatable.View animation={'fadeInUp'} delay={0.1}>
                    <View style={{ marginHorizontal: 15 }}>
                        <View style={styles.contact_area}>
                            <View style={styles.short_contact_area}>
                                <Text style={styles.time_contact}>4: 00 AM - 5: 00 AM</Text>
                                <Text style={styles.contact_area_name}>Blue Sedan Car</Text>
                                <Text style={styles.contact_riders}>2 Riders - call in 1hr</Text>
                                <Text style={styles.contact_ml}>$120 <Text style={styles.inside_contact_ml}>/ 5 ml</Text></Text>
                            </View>
                            <View style={styles.contact_call_area}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.contact_area_circle} onPress={() => navigation.navigate('MapHereNext')}>
                                    <FontAwesome5 name='phone-alt' style={styles.contact} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={[styles.contact_area_circle, { backgroundColor: COLOURS.red }]}>
                                    <Entypo name='trash' style={styles.contact} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <View style={styles.contact_area}>
                            <View style={styles.short_contact_area}>
                                <Text style={styles.time_contact}>4: 00 AM - 5: 00 AM</Text>
                                <Text style={styles.contact_area_name}>Blue Sedan Car</Text>
                                <Text style={styles.contact_riders}>2 Riders - call in 1hr</Text>
                                <Text style={styles.contact_ml}>$120 <Text style={styles.inside_contact_ml}>/ 5 ml</Text></Text>
                            </View>
                            <View style={styles.contact_call_area}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.contact_area_circle}>
                                    <FontAwesome5 name='phone-alt' style={styles.contact} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={[styles.contact_area_circle, { backgroundColor: COLOURS.red }]}>
                                    <Entypo name='trash' style={styles.contact} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 15 }}>
                        <View style={styles.contact_area}>
                            <View style={styles.short_contact_area}>
                                <Text style={styles.time_contact}>4: 00 AM - 5: 00 AM</Text>
                                <Text style={styles.contact_area_name}>Blue Sedan Car</Text>
                                <Text style={styles.contact_riders}>2 Riders - call in 1hr</Text>
                                <Text style={styles.contact_ml}>$120 <Text style={styles.inside_contact_ml}>/ 5 ml</Text></Text>
                            </View>
                            <View style={styles.contact_call_area}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.contact_area_circle}>
                                    <FontAwesome5 name='phone-alt' style={styles.contact} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={[styles.contact_area_circle, { backgroundColor: COLOURS.red }]}>
                                    <Entypo name='trash' style={styles.contact} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 15 }}>
                        <View style={styles.contact_area}>
                            <View style={styles.short_contact_area}>
                                <Text style={styles.time_contact}>4: 00 AM - 5: 00 AM</Text>
                                <Text style={styles.contact_area_name}>Blue Sedan Car</Text>
                                <Text style={styles.contact_riders}>2 Riders - call in 1hr</Text>
                                <Text style={styles.contact_ml}>$120 <Text style={styles.inside_contact_ml}>/ 5 ml</Text></Text>
                            </View>
                            <View style={styles.contact_call_area}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.contact_area_circle}>
                                    <FontAwesome5 name='phone-alt' style={styles.contact} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={[styles.contact_area_circle, { backgroundColor: COLOURS.red }]}>
                                    <Entypo name='trash' style={styles.contact} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Animatable.View>
                <View style={{ marginBottom: 70 }}></View>
            </ScrollView>
        </>
    )
}

export default Notification

const styles = StyleSheet.create({

    contact: {
        fontSize: 15,
        color: COLOURS.white,
    },

    contact_area_circle: {
        padding: 12,
        borderRadius: 50,
        marginVertical: 8,
        backgroundColor: COLOURS.blue,
    },

    inside_contact_ml: {
        fontSize: 13,
        color: COLOURS.grey,
    },

    contact_call_area: {

        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    contact_ml: {
        padding: 5,
        fontSize: 17,
        paddingBottom: 0,
        letterSpacing: .3,
        color: COLOURS.blue,
        fontFamily: 'Poppins-Medium',
    },

    contact_riders: {
        paddingLeft: 5,
        fontSize: 12,
        paddingBottom: 0,
        letterSpacing: .3,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Regular',
    },

    contact_area_name: {
        padding: 5,
        fontSize: 13,
        paddingBottom: 0,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    time_contact: {
        padding: 5,
        fontSize: 12,
        paddingBottom: 0,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Regular',
    },

    contact_area: {
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: COLOURS.lightborder,
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
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    see: {
        padding: 5,
        fontSize: 12,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Poppins-Medium',
    },

    history_icon: {
        fontSize: 25,
        color: COLOURS.black,
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