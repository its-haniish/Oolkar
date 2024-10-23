import { StyleSheet, Dimensions } from 'react-native';

// Get the width of the device screen
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    horizontalScroll: {
        marginVertical: 20,
    },
    imageContainer: {
        width: screenWidth, // Makes the image container as wide as the screen
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: screenWidth, // Image width is 80% of the screen width
        height: 200, // You can adjust this to your preferred height
        resizeMode: 'cover',
        aspectRatio: 16 / 9, // Ensures the image is square
        borderRadius: 10,
        marginLeft: -20,
    },
    categoryTitle: {
        fontSize: 21,
        fontWeight: '500',
        color: 'black',
        marginBottom: 10,
        width: '100%',
        textAlign: 'center',

    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        gap: 20,
    },
    categoryText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        marginBottom: 10,
        textAlign: 'center',

    },
    switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Increases the size of the switch
    },
    categoryIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    categoryIconMaleText: {
        color: 'skyblue',
        fontSize: 16,
        fontWeight: '500',
    },
    categoryIconFemaleText: {
        color: 'purple',
        fontSize: 16,
        fontWeight: '500',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    posterContainer: {
        width: '30%', // 3 elements in a row
        marginBottom: 10,
    },
    poster: {
        width: '100%',
        height: 110, // You can adjust the height as needed
        resizeMode: 'cover',
        borderRadius: 10,
        aspectRatio: 1,
    },


});