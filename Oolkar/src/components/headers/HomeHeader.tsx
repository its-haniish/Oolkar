import React from 'react'
import { View, TouchableWithoutFeedback, Image, Text, StyleSheet } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const HomeHeader: React.FC = () => {
    return (
        <View style={styles.headerContainer}>

            {/* Left side: Menu and Location */}
            <View style={styles.leftContainer}>

                <View style={styles.locationContainer}>
                    <MaterialIcons name="location-pin" size={24} color="black" />
                    <MaterialCommunityIcons name="menu-down" size={24} color="black" />
                </View>
                <Text style={styles.locationText}>
                    Railway Road...
                </Text>
            </View>

            {/* Center: App Logo */}
            <Image
                source={require('../../assets/AppLogo.png')}
                style={styles.appLogo}
            />

            {/* Right side: Notifications */}
            <View style={styles.rightContainer}>
                <TouchableWithoutFeedback style={styles.notificationButton}>
                    <Octicons name="heart" size={24} color="black" />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.notificationButton}>
                    <>
                        <Octicons name="bell" size={24} color="black" />
                        <View style={styles.notificationTextContainer}>
                            <Text style={styles.notificationText}>9+</Text>
                        </View>
                    </>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default HomeHeader


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 60,
        backgroundColor: 'white',
        position: 'relative',
        elevation: 1,

    },
    leftContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',

    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        gap: 1,
    },
    locationText: {
        marginLeft: 1,
        fontSize: 14,
        color: 'black',
        fontFamily: "TiltNeon-Regular",
    },
    appLogo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        position: 'absolute',
        top: 10,
        left: '50%',
        marginLeft: -40,

    },
    notificationButton: {
        marginRight: 10,
    },
    notificationTextContainer: {
        position: 'absolute',
        top: -2,
        right: -4,
        backgroundColor: 'red',
        borderRadius: 50,
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationText: {
        color: 'white',
        fontSize: 10,
        fontFamily: "TiltNeon-Regular",
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }
});
