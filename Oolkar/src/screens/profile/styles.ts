import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    avatar: {
        elevation: 7
    },
    profileSectionContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileSectionBtnsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    editProfileBtn: {
        backgroundColor: 'rgb(0, 122, 255)',
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
        elevation: 5
    },
    editProfileText: {
        color: "white",
        paddingHorizontal: 10,
        fontFamily: "TiltNeon-Regular",
    },
    username: {
        color: 'black',
        fontSize: 20,
        marginTop: 10,
        fontFamily: "TiltNeon-Regular",
    },
    optionListContainer: {
        marginTop: 20
    },
    optionListItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    optionListText: {
        marginLeft: 20,
        fontSize: 18,
        fontFamily: "TiltNeon-Regular",
        color: 'black',
    }
});