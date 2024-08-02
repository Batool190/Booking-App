import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import Header from '../../../Components/Header';
import { cancel, done } from '../../../Constants/Images';
import styles from './styles';

const AcceptJobScreen = () => {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ justifyContent: "center" }}
        >
            <Header />
            <View style={styles.textView}>
                <Text style={styles.hiText}>Shakeel Send you a job request</Text>
                <Text style={styles.demoText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text style={styles.demoText}>
                    30th March 2023, Thursday
                </Text>
                <Text style={styles.demoText}>
                    Karachi, Pakistan
                </Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={cancel} style={styles.cancel} />
                        <Text style={styles.demoText}>Reject</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={done} style={styles.done} />
                        <Text style={styles.demoText}>Accept</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default AcceptJobScreen;