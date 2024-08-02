import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, StyleSheet } from 'react-native';
import HomeScreen from '../../../Screens/UserScreens/HomeScreen';
import { chat, homeIcon, job, profile } from '../../../Constants/Images';
import { COLORS } from '../../../Constants/COLORS';
import JobScreen from '../../../Screens/UserScreens/JobScreen';
import ChatAll from '../../../Screens/UserScreens/ChatAll';
import ProfileFinal from '../../../Screens/UserScreens/ProfileFinal';

const BottomTabs = () => {

    const Tab = createBottomTabNavigator();

    const screenOptions = route => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        // tabBarActiveTintColor: '#000',
        // tabBarInactiveTintColor: '#FAF9F9',
        tabBarShowLabel: false,
        tabBarIconStyle: {
            paddingBottom: 0,
        },
        tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 80,
            elevation: 24,
            borderTopWidth: 0,
            backgroundColor: COLORS.black
        },
    });

    const ActiveIcon = ({ img }) => (
        <Image style={styles.ActiveImage} source={img} resizeMode={'contain'} />
    );

    const UnActiveIcon = ({ img }) => (
        <>
            <Image style={styles.UnActiveImage} source={img} resizeMode={'contain'} />
            {/* <Image style={styles.LeaveIcon} source={LeaveIcon} resizeMode={'contain'} /> */}
        </>
    );

    return (
        <Tab.Navigator screenOptions={screenOptions} initialRouteName={'Home'}>
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {!focused ?
                                    <View style={styles.View}>
                                        <ActiveIcon img={homeIcon} />
                                        {/* <TextLabel label={'Home'} fontSize={12} color={COLORS.green} marginTop={5} /> */}
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: COLORS.white,
                                                marginTop: 5
                                            }}
                                        >
                                            Home
                                        </Text>
                                    </View>
                                    :
                                    <UnActiveIcon img={homeIcon} />
                                }
                            </>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={'JobScreen'}
                component={JobScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {!focused ?
                                    <View style={styles.View}>
                                        <ActiveIcon img={job} />
                                        {/* <TextLabel label={'Home'} fontSize={12} color={COLORS.green} marginTop={5} /> */}
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: COLORS.white,
                                                marginTop: 5
                                            }}
                                        >
                                            Job
                                        </Text>
                                    </View>
                                    :
                                    <UnActiveIcon img={job} />
                                }
                            </>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={'ChatAllScreen'}
                component={ChatAll}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {!focused ?
                                    <View style={styles.View}>
                                        <ActiveIcon img={chat} />
                                        {/* <TextLabel label={'Home'} fontSize={12} color={COLORS.green} marginTop={5} /> */}
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: COLORS.white,
                                                marginTop: 5
                                            }}
                                        >
                                            Chat
                                        </Text>
                                    </View>
                                    :
                                    <UnActiveIcon img={chat} />
                                }
                            </>
                        );
                    },
                }}
            />
            <Tab.Screen
                name={'Profile'}
                component={ProfileFinal}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {!focused ?
                                    <View style={styles.View}>
                                        <ActiveIcon img={profile} />
                                        {/* <TextLabel label={'Home'} fontSize={12} color={COLORS.green} marginTop={5} /> */}
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: COLORS.white,
                                                marginTop: 5
                                            }}
                                        >
                                            Profile
                                        </Text>
                                    </View>
                                    :
                                    <UnActiveIcon img={profile} />
                                }
                            </>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;

const styles = StyleSheet.create({
    ActiveImage: {
        height: 25,
        width: 25,
        tintColor: COLORS.white
    },
    UnActiveImage: {
        height: 30,
        width: 30,
        tintColor: COLORS.white
    },
    View: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});