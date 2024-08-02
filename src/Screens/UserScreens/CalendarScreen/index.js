import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from '../../../Components/Header';
import { calendar } from '../../../Constants/Images';
import styles from './styles';

const CalendarScreen = () => {

    const navigation = useNavigation();
    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* <Header /> */}
                <View style={styles.textView}>
                    <Text style={styles.hiText}>Hi Shakeel</Text>
                    <Text style={styles.findText}>Select date</Text>
                </View>
                <Image source={calendar} style={{ resizeMode: "contain", height: 350, width: 350, marginTop: 20, alignSelf: "center" }} />
                {/* <View style={{ width: "80%", alignSelf: "center" }}>
                    <Text style={{ color: "#fff", fontSize: 20 }}>Charges</Text>
                    <Text style={{ color: "#999", fontSize: 11 }}>Per day charges = 10,000</Text>
                    <Text style={{ color: "#999", fontSize: 11 }}>Total Days: 5 days</Text>
                    <Text style={{ color: "#999", fontSize: 11 }}>Calculation : total days x per day charges</Text>
                </View> */}
            </ScrollView>
            <View style={styles.bottomView}>
                <View style={styles.row}>
                    {/* <View>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.price}>50,0000</Text>
                    </View> */}
                </View>
                <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("Home")}>
                    <Text style={styles.next}>Next</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default CalendarScreen;