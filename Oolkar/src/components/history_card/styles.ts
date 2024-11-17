import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
        gap: 5,
        width: "100%",
        borderRadius: 10,
        marginVertical: 5,
        elevation: 10,
        backgroundColor: "#fff", // Required for elevation to work
    },
    imageContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    shopName: {
        color: "black",
        fontWeight: "600",
        width: "70%",
        fontFamily: "TiltNeon-Regular",
        fontSize: 16

    },
    title: {
        color: "black",
        fontWeight: "600",
        fontFamily: "TiltNeon-Regular",
    },
    textContent: {
        color: "black",
        fontWeight: "300",
        fontFamily: "TiltNeon-Regular",
        width: "70%"
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        width: "100%",
        flexDirection: "row",
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: "TiltNeon-Regular"

    },
    priceTitle: {
        color: "black",
        fontWeight: "600",
        fontFamily: "TiltNeon-Regular",
    },
    priceTextContent: {
        color: "black",
        fontWeight: "300",
        fontFamily: "TiltNeon-Regular",
    },
});