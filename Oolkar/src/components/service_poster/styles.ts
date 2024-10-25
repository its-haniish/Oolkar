import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    posterContainer: {
        width: '30%', // 3 elements in a row
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    poster: {
        width: '100%',
        height: 70, // You can adjust the height as needed
        resizeMode: 'cover',
        borderRadius: 10,
        aspectRatio: 1,
    },
    serviceText: {
        textAlign: 'center',
        marginTop: 5,
        color: 'black',
        fontFamily: "TiltNeon-Regular",
        fontSize: 15,
    }
});