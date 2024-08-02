import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../Screens/UserScreens/ProfileScreen';
import HomeScreen from '../../Screens/UserScreens/HomeScreen';
import WorkerScreen from '../../Screens/UserScreens/WorkerScreen';
import CalendarScreen from '../../Screens/UserScreens/CalendarScreen';
import ApplyJobScreen from '../../Screens/UserScreens/ApplyJobScreen';
import ProfileFinal from '../../Screens/UserScreens/ProfileFinal';
import AcceptJobScreen from '../../Screens/UserScreens/AcceptJobScreen';
import Header from '../../Components/Header';
import BottomTabs from './BottomTab';
import NotificationScreen from '../../Screens/UserScreens/NotificationScreen';

const UserNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <>
            {/* <Header /> */}
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'BottomTabs'}>
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                <Stack.Screen name="Worker" component={WorkerScreen} />
                <Stack.Screen name="Calendar" component={CalendarScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="ProfileFinal" component={ProfileFinal} />
                <Stack.Screen name="ApplyJobScreen" component={ApplyJobScreen} />
                <Stack.Screen name="AcceptJobScreen" component={AcceptJobScreen} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            </Stack.Navigator>
        </>
    );
};

export default UserNavigation;