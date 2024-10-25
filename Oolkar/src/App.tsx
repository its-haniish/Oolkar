import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-paper';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// icons
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// screens
import Profile from './screens/profile/Profile';
import Explore from './screens/explore/Explore';
import Bookings from './screens/bookings/Bookings';
import Home from './screens/home/Home';


const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer
    >
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <Octicons name="home" color={color} size={26} />,
            tabBarLabelStyle: {
              fontFamily: "TiltNeon-Regular",
            },
            // Custom combined header
            header: () => (
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
                  source={require('./assets/AppLogo.png')}
                  style={styles.appLogo}
                />

                {/* Right side: Notifications */}
                <View style={styles.rightContainer}>
                  <TouchableOpacity style={styles.notificationButton}>
                    <Octicons name="heart" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.notificationButton}>
                    <Octicons name="bell" size={24} color="black" />
                    <View style={styles.notificationTextContainer}>
                      <Text style={styles.notificationText}>9+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ color }) => <Octicons name="zap" color={color} size={26} />,
            tabBarLabelStyle: {
              fontFamily: "TiltNeon-Regular",
            }
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={Bookings}
          options={{
            tabBarIcon: ({ color }) => <Octicons name="history" color={color} size={26} />,
            tabBarLabelStyle: {
              fontFamily: "TiltNeon-Regular",
            }
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, focused }) => {

              const avatarSource = focused
                ? require('./assets/user/userdummy-blue.png')
                : require('./assets/user/userdummy-gray.png');
              return <Avatar.Image size={30} source={avatarSource} />;
            },
            tabBarLabelStyle: {
              fontFamily: "TiltNeon-Regular",
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: 'white',
    position: 'relative',
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
