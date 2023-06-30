import React, { useEffect, useState } from 'react'
import { COLOURS } from '../Components/ThemeColours';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Geolocation from '@react-native-community/geolocation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Image, StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Platform, ScrollView, StatusBar } from 'react-native'

const MapHere = ({ navigation }) => {

    const [locationStatus, setLocationStatus] = useState('');
    const [currentLatitude, setCurrentLatitude] = useState('...');
    const [currentLongitude, setCurrentLongitude] = useState('...');

    const [value, setValue] = useState(null);

    const data = [
        { label: 'California', value: '2' },
        { label: 'Florida', value: '1' },
    ]

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
                subscribeLocationLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        getOneTimeLocation();
                        subscribeLocationLocation();
                    } else {
                        setLocationStatus('Permission Denied');
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
        return () => {
            Geolocation.clearWatch(watchID);
        };
    }, []);

    const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
            (position) => {
                setLocationStatus('You are Here');
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);
                setCurrentLongitude(currentLongitude);
                setCurrentLatitude(currentLatitude);
            },
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            },
        );
    };

    const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
            (position) => {
                setLocationStatus('You are Here');
                console.log(position);
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);
                setCurrentLongitude(currentLongitude);
                setCurrentLatitude(currentLatitude);
            },
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 1000
            },
        );
    };

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
            <View style={{ flex: 1, backgroundColor: COLOURS.white }}>

                <View style={styles.nav_notifi}>
                    <Text style={{ color: COLOURS.white }}>Profile</Text>
                    <Text style={styles.categories}>Add Location</Text>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <Image source={require('../images/profile-1.jpg')} style={styles.profile_here} />
                    </TouchableOpacity>
                </View>

                <View style={styles.location_info_box}>
                    <Text style={styles.location_user}>Hi , user</Text>
                    <View style={styles.location_name}>
                        <Ionicons name='ios-location' style={styles.icon_location} />
                        <Text style={styles.add_location_name}>Orlando ,</Text>
                        <Dropdown
                            style={{
                                width: 95,
                                height: 30,
                                color: '#000',
                                backgroundColor: COLOURS.white,
                            }}
                            placeholderStyle={{ color: COLOURS.grey, fontFamily: 'Poppins-Medium', fontSize: 12, paddingLeft: 5, }}
                            selectedTextStyle={{ color: COLOURS.grey, fontSize: 12, fontFamily: 'Poppins-Medium' }}
                            inputSearchStyle={{ color: COLOURS.black, }}
                            iconStyle={styles.iconStyle}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="California"
                            itemTextStyle={{ color: COLOURS.black, fontSize: 12, width: 100, fontFamily: 'Poppins-Medium' }}
                            selectedStyle={{ color: COLOURS.black, fontSize: 11, fontFamily: 'Poppins-Medium' }}
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }}

                        />
                    </View>
                </View>

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


                <ScrollView style={{ height: '32%', position: 'absolute', bottom: 0, }} horizontal>

                    <View style={styles.ride_details_box}>
                        <View style={styles.place_here_box}>
                            <Image source={require('../images/food-1.jpg')} style={styles.map_here_img} />
                            <Text style={styles.places}>Famous Cafeteria  Hotel</Text>
                        </View>
                        <View style={styles.payment_customer_star}>
                            <View style={styles.btn_rating_contaiener}>
                                <View style={{ flexDirection: 'row', }}>
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <View>
                                        <Text style={styles.maphere_rating}>(4.3 )</Text>
                                    </View>
                                </View>

                                <View>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.btn_rating} onPress={() => navigation.navigate('MapHereNext')}>
                                        <Text style={styles.btn_rating_text}>bring me there</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={styles.ride_details_box}>
                        <View style={styles.place_here_box}>
                            <Image source={require('../images/8.jpg')} style={styles.map_here_img} />
                            <Text style={styles.places}>Famous Cafeteria  Hotel</Text>
                        </View>
                        <View style={styles.payment_customer_star}>
                            <View style={styles.btn_rating_contaiener}>
                                <View style={{ flexDirection: 'row', }}>
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <View>
                                        <Text style={styles.maphere_rating}>(3.9 )</Text>
                                    </View>
                                </View>

                                <View>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.btn_rating}>
                                        <Text style={styles.btn_rating_text}>bring me there</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={styles.ride_details_box}>
                        <View style={styles.place_here_box}>
                            <Image source={require('../images/chicken.jpg')} style={styles.map_here_img} />
                            <Text style={styles.places}>Famous Cafeteria  Hotel</Text>
                        </View>
                        <View style={styles.payment_customer_star}>
                            <View style={styles.btn_rating_contaiener}>
                                <View style={{ flexDirection: 'row', }}>
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <View>
                                        <Text style={styles.maphere_rating}>(4.9 )</Text>
                                    </View>
                                </View>

                                <View>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.btn_rating}>
                                        <Text style={styles.btn_rating_text}>bring me there</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={styles.ride_details_box}>
                        <View style={styles.place_here_box}>
                            <Image source={require('../images/cake.jpg')} style={styles.map_here_img} />
                            <Text style={styles.places}>Famous Cafeteria  Hotel</Text>
                        </View>
                        <View style={styles.payment_customer_star}>
                            <View style={styles.btn_rating_contaiener}>
                                <View style={{ flexDirection: 'row', }}>
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <AntDesign name='star' style={styles.payment_star} />
                                    <View>
                                        <Text style={styles.maphere_rating}>(2.9 )</Text>
                                    </View>
                                </View>

                                <View>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.btn_rating}>
                                        <Text style={styles.btn_rating_text}>bring me there</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>
                {/* <View style={styles.ride_details_box}>
                            <View style={styles.place_here_box}>
                                <Image source={require('../images/profile-2.jpg')} style={styles.map_here_img} />
                                <Text style={styles.places}>Famous Cafeteria  Hotel</Text>
                            </View>
                            <View style={styles.payment_customer_star}>
                                <View style={styles.btn_rating_contaiener}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <AntDesign name='star' style={styles.payment_star} />
                                        <AntDesign name='star' style={styles.payment_star} />
                                        <AntDesign name='star' style={styles.payment_star} />
                                        <AntDesign name='star' style={styles.payment_star} />
                                        <AntDesign name='star' style={styles.payment_star} />
                                        <View>
                                            <Text style={styles.maphere_rating}>(4.9 )</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <TouchableOpacity activeOpacity={0.8} style={styles.btn_rating}>
                                            <Text style={styles.btn_rating_text}>bring me there</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View> */}
                {/* </ScrollView> */}

            </View>
        </>
    )
}

export default MapHere

const styles = StyleSheet.create({

    ride_details_box: {
        margin: 20,
        elevation: 5,
        // bottom: 50,
        // width: '20%',
        height: 130,
        borderRadius: 10,
        paddingVertical: 10,
        // position: 'absolute',
        paddingHorizontal: 20,
        backgroundColor: COLOURS.light,
    },


    btn_rating: {
        height: 30,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: COLOURS.blue,
    },

    btn_rating_text: {
        fontSize: 12,
        paddingVertical: 5,
        color: COLOURS.white,
        textTransform: 'uppercase',
        textAlignVertical: 'center',
        fontFamily: 'Poppins-Medium',
    },

    maphere_rating: {
        fontSize: 10,
        marginLeft: 6,
        color: COLOURS.grey,
        fontFamily: 'Poppins-Medium',
    },

    payment_star: {
        fontSize: 15,
        color: COLOURS.darkyellow,
    },

    btn_rating_contaiener: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOURS.light,
        justifyContent: 'space-between',
    },

    places: {
        top: -10,
        fontSize: 14,
        marginLeft: 20,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    map_here_img: {
        top: -30,
        width: 80,
        height: 80,
        borderRadius: 10,
    },

    place_here_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    nav_notifi: {
        marginTop: 25,
        marginBottom: 5,
        width: '100%',
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