import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, StatusBar, Text, Image } from 'react-native';


const data = [
    {
        title: 'Save time by tracking your studies',
        text: 'Schedule your classes assignments, quizzes and more',
        image: require('../images/star.png'),
        backgroundColor: '#000',
    },
    {
        title: 'Stay on top of your education',
        text: 'Schedule your classes assignments, quizzes and more',
        image: require('../images/star.png'),
        backgroundColor: '#000',
    },
    {
        title: 'Spend more time doing the things you love',
        text: 'Schedule your classes assignments, quizzes and more',
        image: require('../images/star.png'),
        backgroundColor: '#000',
    },
];

const OnBoard = (props) => {
    const renderItem = ({ item }) => {
        return (
            <>
                <View style={styles.slide}>
                    <Image style={styles.img} source={item.image} />
                    <View style={{ backgroundColor: 'red', height: '30%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                </View>
            </>
        );
    }


    const keyExtractor = (item) => item.title;


    const renderDoneButton = () => {
        return (
            <View style={{ backgroundColor: 'red',  }}>
                <View style={styles.donebtnwrapper}>
                    <Text style={styles.donebtn}>Done <FontAwesome5 name={'angle-right'} size={13} style={styles.icon} /></Text>
                </View>
            </View>
        );
    }

    const renderNextButton = () => {
        return (
            <View style={{ backgroundColor: 'red',  }}>
                <View style={styles.nextbtnwrapper}>
                    <Text style={styles.nextbtn}>Next</Text>
                </View>
            </View>
        );
    }

    const renderPrevButton = () => {
        return (
            <View style={{ backgroundColor: 'red',  }}>
                <View style={styles.prevbtnwrapper}>
                    <Text style={styles.prevbtn}>Prev</Text>
                </View>
            </View>
        );
    }

    const handleDone = () => {
        props.handleDone()
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider keyExtractor={keyExtractor} renderItem={renderItem} renderDoneButton={renderDoneButton} renderNextButton={renderNextButton} renderPrevButton={renderPrevButton}
                showPrevButton dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle} onDone={handleDone} data={data} />
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    img: {
        marginVertical: 60,
        marginHorizontal: 60,
        backgroundColor: 'red',
        height: 200,
        width: 200
    },

    title: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        // marginHorizontal: 60,
        backgroundColor: 'red',

        fontFamily: 'Poppins-SemiBold',
    },
    text: {
        fontSize: 15,
        color: 'black',
        padding: 20,
        // marginHorizontal: 60,
        backgroundColor: 'red',
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },

    donebtnwrapper: {
        height: 45,
        backgroundColor: 'blue',
        paddingRight: 20,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        // position: 'absolute',
        // right: -16,

    },
    nextbtnwrapper: {
        // height: 40,
        // width: 40,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    prevbtnwrapper: {
        height: 40,
        width: 40,
        marginLeft: 20,
        // alignItems: 'center',
        justifyContent: 'center',
    },

    nextbtn: {
        color: 'blue',
        fontWeight: '500',
        letterSpacing: .5,
    },

    donebtn: {
        color: 'blue',
        fontWeight: '500',
        letterSpacing: .5,
        color: '#fff',
        width: 50,
    },

    prevbtn: {
        color: 'blue',
        fontWeight: '500',
        letterSpacing: .5,
    },

    dotStyle: {
        backgroundColor: 'orange',
    },

    activeDotStyle: {
        backgroundColor: 'blue',
    },

});

export default OnBoard;
