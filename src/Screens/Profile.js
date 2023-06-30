import axios from 'axios';
import { ASSET_URL, BASE_URL } from './Config';
import React, { useEffect, useState } from 'react'
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, ScrollView, StatusBar, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'

const Profile = ({ navigation }) => {

    const [image, setImage] = useState(null);
    const [customer, setCustomer] = useState('');
    const [imagehere, setImageHere] = useState(null);
    const [new_imageset, setNewImage] = useState(false);
    const [galleryphoto, setGalleryPhoto] = useState(null);


    useEffect(() => {
        checkLogin();
        userdata();
    }, [])

    const [token, setToken] = useState(null);

    const removeToken = async () => {
        await AsyncStorage.removeItem("token");
    };

    const checkLogin = async () => {
        let t = await AsyncStorage.getItem("token");
        // console.log(token)
        setToken(t);
    }


    let options = {
        saveTophotos: true,
        mediatype: 'photo',
    };

    const opengallery = async (uri) => {

        const images = await launchImageLibrary(options);
        setImage(images.assets[0].uri);
        const formdata = new FormData()
        setNewImage(true)
        formdata.append('image', {
            uri: images.assets[0].uri,
            type: images.assets[0].type,
            name: images.assets[0].fileName
        });
        try {
            const response = await fetch(BASE_URL + '/upload-image', {
                method: 'POST',
                body: formdata,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const Logout_Here = () => {

        axios({
            method: 'get',
            url: BASE_URL + '/logout',

            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            }
        })


            .then(function (response) {
                removeToken();
                console.log(response.data);
                navigation.replace("Login");
            })

            .catch(function (error) {
                console.log(error);
            });
    }

    const userdata = async () => {
        let token = await AsyncStorage.getItem("token");
        if (token != null) {
            await axios({
                method: 'get',
                url: BASE_URL + '/loggeduser',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(function (response) {
                    console.log(response.data)
                    setCustomer(response.data.user.name)
                    console.log(customer)
                    setImageHere(response.data.user.image);
                    console.log(ASSET_URL + imagehere)
                })

                .catch(function (error) {
                    console.log(error)
                })
        }
    }


    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView style={styles.container}>
                <View style={styles.nav_notifi}>
                    <Text style={{ color: COLOURS.white }}>profile</Text>
                    <Text style={styles.categories}>Profile</Text>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.navigate('Notification_Here')}>
                        <MaterialCommunityIcons name='bell-ring' style={styles.icon_name} />
                    </TouchableOpacity>
                </View>
                <Animatable.View animation="slideInDown" delay={0.1}>
                    <View style={styles.profile_box}>
                        <View style={styles.profile_all_in_one}>
                            <Image source={require('../images/star.png')} style={styles.star} />

                            {imagehere == null ?
                                <View style={{ backgroundColor: COLOURS.lightborder, justifyContent: 'center', alignItems: 'center', width: 180, height: 180, elevation: 1, borderRadius: 100 }} resizeMode='cover' />
                                :
                                (new_imageset == true) ?
                                    < Image source={{ uri: image }} style={{ justifyContent: 'center', alignItems: 'center', width: 180, height: 180, elevation: 41, borderRadius: 100 }} resizeMode='cover' />
                                    :
                                    <Image source={{ uri: ASSET_URL + imagehere }} style={{ justifyContent: 'center', alignItems: 'center', width: 180, height: 180, elevation: 41, borderRadius: 100 }} resizeMode='cover' />
                            }

                            <TouchableOpacity activeOpacity={0.6} onPress={opengallery}>
                                <FontAwesome5 name='plus' style={styles.plus_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
                <Animatable.View animation="slideInLeft" delay={0.1}>
                    <View style={styles.profile_data}>
                        <Text style={styles.profile_name}>{customer}</Text>
                    </View>
                </Animatable.View>
                <Animatable.View animation="slideInRight" delay={0.1}>
                    <View style={styles.cart_box}>
                        <Text style={styles.points}>you won 300 points</Text>
                        <Text style={styles.para_points}>Thanks for riding with us! you earned 300 point from your last ride</Text>
                        <View style={styles.btn_container}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.radeem_btn}>
                                <Text style={styles.radeem_btn_text}>Radeem Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" delay={0.1}>
                    <View style={styles.inform}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Added_Card')}>
                            <View style={styles.user_here_box}>
                                <MaterialCommunityIcons name='credit-card-outline' style={styles.user_icon} />
                                <Text style={styles.user_name}>Cards</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('My_Wallet')}>
                            <View style={styles.user_here_box}>
                                <Ionicons name='wallet-outline' style={styles.user_icon} />
                                <Text style={styles.user_name}>My Wallet</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={Logout_Here}>
                            <View style={styles.user_here_box}>
                                <AntDesign name='logout' style={styles.user_icon} />
                                <Text style={styles.user_name}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
                <View style={{ marginTop: '10%' }}></View>
            </ScrollView>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({

    cart_box: {
        padding: 15,
        marginTop: 30,
        borderRadius: 15,
        marginHorizontal: 20,
        textAlign: 'center',
        backgroundColor: COLOURS.blue,
    },

    points: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Poppins-Regular',
    },

    para_points: {
        fontSize: 13,
        lineHeight: 20,
        marginBottom: 10,
        color: COLOURS.white,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },

    radeem_btn: {
        width: 120,
        padding: 8,
        borderRadius: 20,
        backgroundColor: COLOURS.white,
    },

    radeem_btn_text: {
        fontSize: 12,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Poppins-Medium',
    },

    btn_container: {
        alignItems: 'center',
        marginVertical: 10,
    },

    inform: {
        marginVertical: 20,
        marginHorizontal: 25,
    },

    user_icon: {
        fontSize: 21,
        paddingRight: 20,
        color: COLOURS.blue,
    },

    user_name: {
        fontSize: 14,
        letterSpacing: .2,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    user_arrow: {
        fontSize: 25,
        color: COLOURS.grey,
    },

    user_detail: {
        marginVertical: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    profile_data: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    profile_name: {
        fontSize: 17,
        color: COLOURS.black,
        fontFamily: 'Poppins-Medium',
    },

    container: {
        height: '100%',
        backgroundColor: COLOURS.white
    },

    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    icon_name: {
        width: 45,
        height: 45,
        padding: 5,
        fontSize: 24,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 7,
        textAlign: 'center',
        paddingVertical: 10,
        color: COLOURS.black,
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
        fontSize: 20,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    user_here_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    profile_box: {
        padding: 20,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    profile_all_in_one: {
        flexDirection: 'column'
    },

    star: {
        top: 2,
        right: 3,
        zIndex: 2,
        width: 25,
        height: 25,
        display: 'none',
        position: 'absolute',
        color: COLOURS.orange,
    },

    profile_image: {
        width: 150,
        height: 150,
        elevation: 41,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profile_container: {
        marginHorizontal: 20,
        marginVertical: 20,
    },

    plus_icon: {
        right: 15,
        zIndex: 2,
        width: 25,
        bottom: 2,
        height: 25,
        fontSize: 12,
        borderRadius: 100,
        position: 'absolute',
        textAlign: 'center',
        color: COLOURS.white,
        textAlignVertical: 'center',
        backgroundColor: COLOURS.black,
    },

})