import React, { useRef, useState } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, Modal, TouchableOpacity, Text, View, Image, Animated } from 'react-native';

const Top_Up = ({ navigation }) => {

    const [visible, setVisible] = useState('');

    // Top Up Start

    const ModalPoup = ({ visible, children }) => {
        const [showModal, setShowModal] = React.useState(visible);
        const scaleValue = React.useRef(new Animated.Value(0)).current;
        React.useEffect(() => {
            toggleModal();
        }, [visible]);
        const toggleModal = () => {
            if (visible) {
                setShowModal(true);
                Animated.spring(scaleValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            } else {
                setTimeout(() => setShowModal(false), 200);
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        };
        return (
            <Modal transparent visible={showModal}>
                <View style={styles.modalBackGround}>
                    <Animated.View
                        style={[styles.modalContainer, { transform: [{ scale: scaleValue, }], backgroundColor: COLOURS.white }]}>
                        {children}
                    </Animated.View>
                </View>
            </Modal>

        );
    };
    // Top Up 

    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
                    </TouchableOpacity>
                    <Text style={styles.categories}>Enter Your Top Up Pin</Text>
                    <Text style={{ color: COLOURS.white }}>Profile</Text>
                </View>
                <Animatable.View animation="zoomIn" delay={0.1}>

                    <View style={styles.debit_card}>
                        <View style={styles.driver_debit_image}>
                            <View style={styles.debit_name_box}>
                                <Text style={styles.name_debit}>Debit</Text>
                                <Image source={require('../images/credit-card.png')} style={styles.img_credit_card} />

                            </View>
                            <View style={styles.debit_image_container}>
                                <Image source={require('../images/master-card.png')} style={styles.img_card} />
                            </View>
                        </View>

                        <Text style={styles.debit_number}>*** *** *** 0011</Text>

                        <View style={styles.debit_balance_box}>
                            <View>
                                <Text style={styles.debit_balance}></Text>
                                <Text style={styles.debit_money}>Driver Card</Text>
                            </View>
                            <TouchableOpacity activeOpacity={10} style={styles.top_btn}>
                                <Text style={styles.top_btn_text}>10 / 27</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>


                <View style={styles.short_container}>
                    <Animatable.View animation="zoomInRight" delay={0.1}>
                        <View style={styles.otp_Container}>
                            <TextInput style={styles.name_inpt} keyboardType='numeric' ref={et1} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et2.current.focus();
                                    }
                                    else if (txt.length < 1) {
                                        et1.current.focus();
                                    }
                                }} />
                            <TextInput style={styles.name_inpt} keyboardType='numeric' ref={et2} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et3.current.focus();
                                    } else if (txt.length < 1) {
                                        et1.current.focus();
                                    }
                                }} />
                            <TextInput style={styles.name_inpt} keyboardType='numeric' ref={et3} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et4.current.focus();
                                    } else if (txt.length < 1) {
                                        et2.current.focus();
                                    }
                                }} />
                            <TextInput style={styles.name_inpt} keyboardType='numeric' ref={et4} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et4.current.focus();
                                    } else if (txt.length < 1) {
                                        et3.current.focus();
                                    }
                                }} />
                        </View>
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" delay={0.1}>
                        <TouchableOpacity activeOpacity={0.6} style={styles.login_here_btn} onPress={() => setVisible(true)}>
                            <Text style={styles.login_here}>Verify </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>


                {/* // Logout Modal start // */}

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ModalPoup visible={visible}>

                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.header}>
                                <TouchableOpacity >
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center' }}>

                            <View style={{ backgroundColor: COLOURS.blue, height: 100, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                                <Image
                                    source={require('../images/wallet.png')}
                                    style={{ height: 50, width: 50, }}
                                    tintColor={COLOURS.white} />
                            </View>
                        </View>

                        <Text style={{ marginVertical: 20, marginBottom: 10, fontSize: 17, textAlign: 'center', color: COLOURS.black, fontFamily: 'Poppins-Bold' }} >
                            Top Up Successful
                        </Text>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ width: 150, lineHeight: 24, fontSize: 12, textAlign: 'center', color: COLOURS.black, fontFamily: 'Poppins-Medium' }} >
                                You Have Successfully top up e-wallet for $110
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20, }}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.modal_here_btn} onPress={() => setVisible(false)}>
                                <Text style={styles.modal_here_btn_text}>ok</Text>
                            </TouchableOpacity>
                        </View>
                    </ModalPoup>
                </View>

                {/* // Logout Modal End // */}
            </ScrollView>
        </>
    )
}

export default Top_Up

const styles = StyleSheet.create({

    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: '70%',
        backgroundColor: COLOURS.green,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },

    header: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    modal_here_btn: {
        padding: 10,
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: COLOURS.blue,
    },

    modal_here_btn_text: {
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
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

    debit_card: {
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        paddingBottom: 10,
        paddingVertical: 20,
        marginHorizontal: 20,
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

    img_credit_card: {
        width: 30,
        height: 30,
        marginTop: 20,
    },

    driver_card: {
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    debit_number: {
        marginTop: 10,
        letterSpacing: .2,
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    debit_balance_box: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    debit_balance: {
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium'
    },

    debit_money: {
        fontSize: 18,
        color: COLOURS.white,
        fontFamily: 'Poppins-SemiBold',
    },

    top_btn_text: {
        top: 10,
        fontSize: 12,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Poppins-Bold',
    },

    short_container: {
        marginTop: '15%',
        marginHorizontal: 20,
    },

    otp_Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    name_inpt: {
        width: 50,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        color: COLOURS.black,
        backgroundColor: COLOURS.light,
        borderColor: COLOURS.lightborder,
    },

    inpt_container: {
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: COLOURS.blue,
    },

    icon: {
        width: 20,
        fontSize: 17,
        color: COLOURS.blue,
    },

    login_here_btn: {
        height: 50,
        padding: 15,
        marginTop: 40,
        width: '100%',
        borderRadius: 5,
        backgroundColor: COLOURS.blue,
    },

    login_here: {
        fontSize: 13,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Poppins-Medium',
    },

    frgt_box: {
        paddingVertical: 25,
        paddingBottom: 0,
    },

    frgt_text: {
        color: COLOURS.grey,
        fontSize: 13,
        lineHeight: 25,
        fontFamily: 'Poppins-Medium',
    },

})