import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import UserNavigation from './UserNavigation';
import { useSelector } from "react-redux";

const NavigationMain = () => {

    const AuthState = useSelector(state => {
        return state?.AuthReducer.LoginUser;
    });

    return (
        <NavigationContainer>
            {AuthState ? (
                <UserNavigation />
            ) : (
                <AuthNavigation />
            )}
        </NavigationContainer>
    );
};

export default NavigationMain;