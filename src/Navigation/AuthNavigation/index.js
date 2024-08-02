import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../Screens/AuthScreens/LoginScreen';
// import UserNavigation from '../UserNavigation';
import SignUpScreen from '../../Screens/AuthScreens/SignupScreen';

const AuthNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
            {/* <Stack.Screen name="userNavigation" component={UserNavigation} /> */}
        </Stack.Navigator>
    );
};

export default AuthNavigation;