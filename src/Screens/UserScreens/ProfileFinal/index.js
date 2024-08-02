import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../Constants/COLORS';
import { userCrop } from '../../../Constants/Images';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { LogOut } from '../../../Store/Reducers/AuthReducer/AuthReducer';

const ProfileFinal = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Image source={userCrop} style={styles.profileImage} />
            <Text style={styles.name}>Shakeel Ahmed</Text>
            <Text style={styles.email}>ShakeelAhmed@gmail.com</Text>
            <TouchableOpacity style={styles.editnBtn}>
                <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: "80%",
                    backgroundColor: "#262a34",
                    paddingVertical: 15,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginVertical: 10
                }}>
                <Text style={{ color: COLORS.white, fontSize: 12 }}>Completed Contracts</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: "80%",
                    backgroundColor: "#262a34",
                    paddingVertical: 15,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginVertical: 10
                }}
            >
                <Text style={{ color: COLORS.white, fontSize: 12 }}>Ongoing Contracts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width: "80%",
                backgroundColor: "#262a34",
                paddingVertical: 15,
                borderRadius: 10,
                paddingHorizontal: 10,
                marginVertical: 10
            }}>
                <Text style={{ color: COLORS.white, fontSize: 12 }}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.logBtn}
                onPress={() => dispatch(LogOut([]))}
            >
                <Text style={styles.logText}>Log out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ProfileFinal;