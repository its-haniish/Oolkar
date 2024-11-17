import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-paper';

// icons
import Octicons from 'react-native-vector-icons/Octicons';

// screens
import Profile from './screens/profile/Profile';
import Explore from './screens/explore/Explore';
import Bookings from './screens/bookings/Bookings';
import Home from './screens/home/Home';

// headers
import HomeHeader from "./components/headers/HomeHeader"


const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer
    >
      <Tab.Navigator >
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
              <HomeHeader />
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
            },
            // Custom combined header
            header: () => (
              <HomeHeader />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

