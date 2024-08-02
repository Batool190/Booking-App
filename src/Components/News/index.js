import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { stars } from '../../Constants/Images';
import styles from './styles';

const News = (props) => {

    let { image, name, description, view } = props;
    const navigation = useNavigation();

    const changeScreen = () => {
        if (view == 1) {
            navigation.navigate("AcceptJobScreen");
        } else {
            navigation.navigate("ApplyJobScreen");
        };
    };

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Image source={image} style={styles.image} />
                <View style={styles.textView}>
                    <View style={{ width: view == 1 ? "75%" : "100%", alignSelf: "center" }}>
                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <Text style={styles.nameText}>{name}</Text>
                            <View style={{ flexDirection: "row", marginLeft: 5 }}>
                                <Image source={stars} style={styles.star} />
                                <Image source={stars} style={styles.star} />
                                <Image source={stars} style={styles.star} />
                                <Image source={stars} style={styles.star} />
                                <Image source={stars} style={styles.star} />
                            </View>
                        </View>
                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <Text style={styles.des}>{description}</Text>
                            {view == 1 ? (
                                <TouchableOpacity
                                    style={styles.applyBtn}
                                    onPress={changeScreen}
                                >
                                    <Text style={styles.applyText}>
                                        View
                                    </Text>
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default News;