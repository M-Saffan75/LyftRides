import axios from 'axios';
import { BASE_URL } from './Config'
import React, { useEffect, useState } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';


const Register = ({ navigation }) => {

  const [name, setName] = useState('')
  const [token, setToken] = useState(null);
  const [mobile_no, setMobile_No] = useState('')
  const [driving_licence, setDriving_Licence] = useState('')

  const [name_error, setName_Error] = useState(false);
  const [licence_error, setLicence_Error] = useState(false);
  const [mobile_no_error, setMobile_No_Error] = useState(false);

  useEffect(() => {
    checkLogin();
  }, [])

  const checkLogin = async () => {

    let t = await AsyncStorage.getItem("token");
    if (t != null) {
      navigation.replace('BottomNavigation');
      console.log(token)
    }
  }

  const setAuth = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
      setToken(token);
      // console.log(await AsyncStorage.getItem("token"))
    } catch (error) {
      Promise.reject(error);
    }
  };

  const RegisterHere = () => {
    if (name.length == '' || mobile_no.length == '' || driving_licence.length == '') {
      setName_Error(true)
      setLicence_Error(true)
      setMobile_No_Error(true)
    }

    else if (name.length != '' || mobile_no.length != '' || driving_licence.length != '') {
      setName_Error(false)
      setLicence_Error(false)
      setMobile_No_Error(false)
    }

    else {
      setName_Error(false)
      setLicence_Error(false)
      setMobile_No_Error(false)
    }

    const data = {
      name: name,
      mobile_no: mobile_no,
      driving_licence_no: driving_licence
    }

    axios.post(BASE_URL + '/register',
      data,
    )

      .then(function (response) {
        console.log(response.data)
        if (response.data.status == 200 && response.data.token) {
          setAuth(response.data.token);
          navigation.replace('BottomNavigation');
        }
        else {
          console.log('credentials are wrong');
        }
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  return (
    <>
      <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
      <ScrollView alwaysBounceVertical Vertical showsVerticalScrollIndicator={false} style={{ backgroundColor: COLOURS.white, }}>


        <View style={styles.container}>
          <View style={styles.child_container}>

            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
              <MaterialIcons name='keyboard-arrow-left' style={styles.icon_name} />
            </TouchableOpacity>

            <Animatable.View style={styles.name_box} animation='slideInDown' delay={0.1}>
              <Text style={styles.name}>Hello ! Register Here To Get Started</Text>
            </Animatable.View>


            <Animatable.View animation='slideInLeft' delay={0.1}>
              <View>
                <View style={styles.inpt_box}>
                  <TextInput placeholder='Full Name' placeholderTextColor={'grey'}
                    style={styles.inpt_here}
                    onChangeText={setName}

                  />
                </View>
              </View>

              {/*  */}
              {name_error == true ? (
                <Animatable.View animation='flipInX' delay={0.01} style={{ display: name.length >= 2 ? 'none' : 'flex' }}>
                  <Text style={styles.phone_error}>Your Name is Required*</Text>
                </Animatable.View>
              ) : null
              }

              {/*  */}
              <View >
                <View style={styles.inpt_box}>
                  <TextInput placeholder='Phone Number' placeholderTextColor={'grey'} keyboardType='numeric'
                    style={styles.inpt_here}
                    onChangeText={setMobile_No}
                    maxLength={11}

                  />
                </View>
              </View>

              {/*  */}

              {mobile_no_error == true ? (
                <Animatable.View animation='flipInX' delay={0.01} style={{ display: mobile_no.length >= 2 ? 'none' : 'flex' }}>
                  <Text style={styles.phone_error}>Phone Number is Required*</Text>
                </Animatable.View>
              ) : null
              }

              {/*  */}
              <View>
                <View style={styles.inpt_box}>
                  <TextInput placeholder='Drive License number' placeholderTextColor={'grey'} keyboardType='numeric'
                    style={styles.inpt_here}
                    onChangeText={setDriving_Licence}
                    maxLength={7}
                  />
                </View>
              </View>

              {/*  */}

              {licence_error == true ? (
                <Animatable.View animation='flipInX' delay={0.01} style={{ display: driving_licence.length >= 2 ? 'none' : 'flex' }}>
                  <Text style={styles.phone_error}>Driving Linsence is Required*</Text>
                </Animatable.View>
              ) : null
              }

              {/*  */}
            </Animatable.View>

            <Animatable.View animation='slideInUp' delay={0.1}>
              <View style={styles.btn_box}>
                <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={RegisterHere}>
                  <Text style={styles.btn_name}>Register Here</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{ width: '70%', }} onPress={() => navigation.replace('Login')} activeOpacity={0.8}>
                <Text style={styles.alreadyaccount}>Already Have an Account ?</Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </View>

      </ScrollView >
    </>
  )
}

export default Register

const styles = StyleSheet.create({

  phone_error: {
    fontSize: 13,
    color: COLOURS.red,
    marginHorizontal: 25,
    fontFamily: 'Poppins-Medium',
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

  name_box: {
    width: '85%',
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 30,
    paddingVertical: 10,
  },

  inpt_box: {
    marginBottom: 5,
    marginHorizontal: 20,
  },

  name: {
    lineHeight: 35,
    fontSize: 25,
    marginTop: 50,
    color: COLOURS.black,
    fontFamily: 'Poppins-SemiBold',
  },

  inpt_names: {
    width: '100%',
    fontSize: 16,
    letterSpacing: .5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    color: COLOURS.apple,
    fontFamily: 'Poppins-Medium',
  },

  inpt_here: {
    height: 60,
    fontSize: 14,
    width: '100%',
    color: 'black',
    borderWidth: 1,
    borderRadius: 8,
    letterSpacing: .4,
    marginVertical: 5,
    paddingHorizontal: 10,
    fontFamily: 'Roboto-Regular',
    backgroundColor: COLOURS.light,
    borderColor: COLOURS.lightborder,
  },

  btn: {
    height: 50,
    width: '100%',
    marginTop: 25,
    borderRadius: 5,
    paddingVertical: 16,
    backgroundColor: COLOURS.blue,
  },

  btn_name: {
    color: 'white',
    fontSize: 12,
    letterSpacing: .9,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },

  btn_box: {
    marginHorizontal: 20,
  },
  alreadyaccount: {
    fontSize: 12,
    marginTop: 20,
    color: '#1b1b1b',
    textAlign: 'left',
    letterSpacing: .3,
    paddingHorizontal: 30,
    fontFamily: 'Poppins-Medium',
  },

})