import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native';
import { banner, userCrop } from '../../Constants/Images';
import styles from './styles';

const Banner = () => {
    return (
        <ImageBackground source={banner} style={styles.banner}>
            <View style={styles.inner}>
                <Image source={userCrop} style={styles.userImage} />
                <View style={styles.textView}>
                    <Text style={styles.dateText}>Wednesday 23 March</Text>
                    <Text style={styles.jobText}>
                        <Text style={styles.name}>Salman Farooqi </Text>
                        hire you for photoshoot at zamzama mall Karachi,Pakistan
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Banner;