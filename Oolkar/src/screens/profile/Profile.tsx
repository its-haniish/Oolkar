import React from 'react'
import { TouchableWithoutFeedback, View, Text, ScrollView } from 'react-native'
import { Divider } from "react-native-paper"
import { styles } from './styles'
import { Avatar } from 'react-native-paper';
const avatarSource = require('../../assets/user/userdummy-blue.png');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


// Define two simple screen components
const Profile: React.FC = () => {
    return (
        <ScrollView>

            {/* // Display the profile screen */}
            <View style={styles.profileSectionContainer}>
                <Avatar.Image style={styles.avatar} size={140} source={avatarSource} />

                <View style={styles.profileSectionBtnsContainer}>
                    <Text style={styles.username}>
                        itshaniish
                    </Text>
                    <TouchableWithoutFeedback style={styles.editProfileBtn}>
                        <Text style={styles.editProfileText}>
                            Edit Profile
                        </Text>
                    </TouchableWithoutFeedback>
                </View>

            </View>

            <Divider style={{
                marginTop: 50,
                marginHorizontal: 10,
            }} />


            {/* options list  */}

            <View style={styles.optionListContainer}>

                <View style={styles.optionListItemContainer}>
                    <FontAwesome6 name="house-user" size={24} color="rgb(0, 122, 255)'" />
                    <Text style={styles.optionListText}>Saved Addresses</Text>

                </View>

                <View style={styles.optionListItemContainer}>
                    <FontAwesome6 name="ranking-star" size={24} color="rgb(0, 122, 255)'" />
                    <Text style={styles.optionListText}>My Reviews</Text>

                </View>

                <View style={styles.optionListItemContainer}>
                    <MaterialCommunityIcons name="sale" size={24} color="rgb(0, 122, 255)'" />
                    <Text style={styles.optionListText}>My Coupons</Text>

                </View>


                <View style={styles.optionListItemContainer}>
                    <MaterialIcons name="support-agent" size={24} color="rgb(0, 122, 255)'" />
                    <Text style={styles.optionListText}>Support</Text>

                </View>

                <View style={styles.optionListItemContainer}>
                    <Ionicons name="document-text-outline" size={24} color="rgb(0, 122, 255)'" />
                    <Text style={styles.optionListText}>Terms & Conditions</Text>

                </View>


                <View style={styles.optionListItemContainer}>
                    <Entypo name="info-with-circle" size={24} color="rgb(0, 122, 255)'" />
                    <Text style={styles.optionListText}>About</Text>

                </View>



                <View style={styles.optionListItemContainer}>
                    <AntDesign name="logout" size={24} color="red" />
                    <Text style={[styles.optionListText, { color: "red", fontFamily: "TiltNeon-Regular" }]} >Logout</Text>

                </View>

            </View>

        </ScrollView>
    );
};
export default Profile