import React from 'react';
import { COLOURS } from '../Components/ThemeColours';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const data = [
  {
    title: 'How to setup and use lefty rides...!',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('../images/mapHere.jpg'),
  },
  {
    title: 'lefty Riders need to know your location',
    text: 'Reduce your stress, increase your productivity',
    image: require('../images/cycle-4.jpg'),
  },
  {
    title: 'Exclusive App for Florida and California Residents',
    text: 'Get started within five minutes',
    image: require('../images/pngwing.com.png'),
  },
];

const Onboarding = (props) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View style={{ backgroundColor: COLOURS.blue, height: '40%', paddingVertical: 50, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <View style={{ width: '100%' }}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;
  const navigation = useNavigation();

  const renderNextButton = () => {

    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    const jump = () => {
      navigation.navigate('Welcome')
    }

    return (
      <TouchableOpacity style={styles.doneButtonWrapper} onPress={jump}>
        <Text style={styles.doneButtonText}>Get Started</Text>
      </TouchableOpacity>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <>
      <StatusBar backgroundColor="#eee" barStyle={'dark-content'} />
      <SafeAreaView>
        <View style={{ height: '100%', }}>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
          <AppIntroSlider
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={data}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            renderDoneButton={renderDoneButton}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            showPrevButton
            onDone={handleDone}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: '100%',
    flexDirection:'column',
    justifyContent: 'space-between',
    backgroundColor: COLOURS.white,
  },
  image: {
    alignItems: 'center',
    height: 300,
    width: '100%',
    marginTop: 40,
  },
  title: {
    width: '100%',
    fontSize: 26,
    lineHeight: 40,
    color: COLOURS.white,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: COLOURS.gray,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginHorizontal: 60,
    marginTop: 20,
  },
  dotStyle: {
    backgroundColor: COLOURS.grey,
  },
  activeDotStyle: {
    backgroundColor: COLOURS.white,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rightText: {
    color: COLOURS.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftText: {
    color: COLOURS.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  doneButtonWrapper: {
    flex: 1,
    backgroundColor: COLOURS.white,
    paddingLeft: 25,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: COLOURS.blue,
  },
});

export default Onboarding;