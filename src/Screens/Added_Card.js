import React, { useState } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, Modal, TouchableOpacity, Text, View, Image, Animated } from 'react-native';

const Added_Card = ({ navigation }) => {


    const [value, setValue] = useState(null);

    const data = [
        { label: 'Visa', value: '1' },
        { label: 'Cash', value: '3' },
        { label: 'Master Card', value: '2' },
    ];
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

                <View style={{ marginTop: '20%' }}></View>

                <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:20, marginBottom:20}}>
                    <Image source={require('../images/s.png')} style={{ height: 20, width: 20,  marginHorizontal:5,}} />
                    <Image source={require('../images/master-card.png')} style={{ height: 30, width: 30,marginHorizontal:5, }} />
                    <Image source={require('../images/visa.png')} style={{ height: 30, width: 40, right: 5 ,marginHorizontal:5,}} />
                </View>
                <Animatable.View animation="slideInLeft" delay={0.1} style={styles.drop_Here}>

                    <Dropdown
                        style={{
                            width: '100%',
                            // margin: 16,
                            // marginBottom:10,
                            height: 55,
                            color: '#000',
                            borderRadius: 6,
                            borderWidth: 1,
                            paddingHorizontal: 10,
                            borderColor: COLOURS.black,
                            backgroundColor: COLOURS.white,
                        }}
                        placeholderStyle={{ color: COLOURS.black, fontFamily: 'Poppins-Bold', fontSize: 11, paddingLeft: 5 }}
                        selectedTextStyle={{ color: COLOURS.black, fontSize: 13, fontFamily: 'Poppins-Medium' }}
                        inputSearchStyle={{ color: COLOURS.black, }}
                        iconStyle={styles.iconStyle}
                        data={data}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="$ (Us Dollar)"
                        searchPlaceholder="Search..."
                        itemTextStyle={{ color: COLOURS.black, fontSize: 14, }}
                        selectedStyle={{ color: COLOURS.black, fontFamily: 'Poppins-Medium', fontSize: 13, }}
                        value={value} onChange={item => { setValue(item.value); }} />
                </Animatable.View>

                <Animatable.View animation="fadeInUp" delay={0.1}>
                    <View style={styles.added_card_container}>
                        <TouchableOpacity style={styles.card_btn_box} activeOpacity={0.8} onPress={() => navigation.navigate('Card_Info')}>
                            <View style={styles.card_added_btn}>
                                <Text style={styles.card_added}>Added Card</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.card_added_icon} />
                        </TouchableOpacity>
                    </View>
                </Animatable.View>

            </ScrollView>
        </>
    )
}

export default Added_Card

const styles = StyleSheet.create({

    drop_Here: {
        marginHorizontal: 20
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

    added_card_container: {
        marginTop: '10%',
        marginHorizontal: 20,
    },

    card_btn_box: {
        width: '100%',
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLOURS.black,
    },

    card_added_btn: {
        padding: 14,
    },

    card_added: {
        fontSize: 14,
        textAlign: 'center',
        color: COLOURS.white,
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Poppins-SemiBold',
    },

    card_added_icon: {
        fontSize: 20,
        color: COLOURS.white,

    },

    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: COLOURS.black,
        fontFamily: 'Poppin-Medium',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: COLOURS.black,
        fontFamily: 'Poppin-Medium',
    },
    iconStyle: {
        width: 20,
        height: 20,
        color: COLOURS.black
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: COLOURS.black,
        fontFamily: 'Poppin-Medium',
    },

})