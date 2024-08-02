import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { userCrop, stars, calendar, cal } from "../../../Constants/Images";
import { useNavigation } from '@react-navigation/native';

const ApplyJobScreen = () => {

    const navigation = useNavigation();

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ justifyContent: "center" }}
        >
            <View style={styles.innerContainer}>
                <View style={styles.userView}>
                    <View style={styles.userInfo}>
                        <Image source={userCrop} style={styles.profileImage} />
                        <Text style={styles.name}>Irfan Raza</Text>
                        <Text style={styles.actor}>Actor</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={stars} style={styles.star} />
                            <Image source={stars} style={styles.star} />
                            <Image source={stars} style={styles.star} />
                            <Image source={stars} style={styles.star} />
                            <Image source={stars} style={styles.star} />
                        </View>
                    </View>
                    <View style={styles.jobView}>
                        <Text style={styles.heading}>Need Camera Man</Text>
                        <Text style={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                        </Text>
                    </View>
                </View>
                <View style={styles.calendar}>
                    <Image source={cal} style={{ width: "90%", alignSelf: "center", height: 250 }} />
                </View>
                <TouchableOpacity style={styles.applyBtn} onPress={()=>navigation.navigate("Home")}>
                    <Text style={styles.applyText}>Apply Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ApplyJobScreen;