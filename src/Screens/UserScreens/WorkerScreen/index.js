import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from '../../../Components/Header';
import actorData from '../../../Constants/ActorData';
import { COLORS } from '../../../Constants/COLORS';
import { stars } from '../../../Constants/Images';
import OccupationData from '../../../Constants/OccupationData';
import styles from './styles';

const WorkerScreen = () => {

    const navigation = useNavigation();
    const [select, setSelect] = useState(1);

    const renderText = ({ item }) => {
        return (
            <TouchableOpacity
                style={select == item.id ? styles.cardSelect : styles.card}
                onPress={() => setSelect(item.id)}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        fontSize: 12,
                    }}
                >
                    {item.occupation}
                </Text>
            </TouchableOpacity>
        );
    };

    const renderActor = ({ item }) => {
        return (
            <View style={styles.actorCard}>
                <View style={{ width: "100%", height: 200, overflow: "hidden" }}>
                    <Image source={item.image} style={styles.profileImage} />
                </View>
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <View style={styles.row1}>
                    <Image source={stars} style={styles.star} />
                    <Image source={stars} style={styles.star} />
                    <Image source={stars} style={styles.star} />
                    <Image source={stars} style={styles.star} />
                    <Image source={stars} style={styles.star} />
                </View>
                <View style={styles.row2}>
                    <Text style={styles.projectText}>Total Project</Text>
                    <Text style={styles.projectText}>{item.project}</Text>
                </View>
                <View style={styles.row3}>
                    <Text style={styles.projectText}>Charges</Text>
                    <Text style={styles.projectText}>{item.charges}PKR / day</Text>
                </View>
                <View
                    style={{
                        backgroundColor: 'rgba(116,202,17,0.3)',
                        width: "100%",
                        height: 10,
                        marginVertical: 2,
                        borderRadius: 5,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'rgba(116,202,17,1)',
                            width: item.percentage,
                            height: 10,
                            marginVertical: 2,
                            borderRadius: 5,
                            marginTop: -0.5
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate("Profile")}>
                    <Text style={styles.details}>View Details</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Header />
            <View style={styles.textView}>
                <Text style={styles.hiText}>Hi Tom</Text>
                <Text style={styles.findText}>Top Rated Users</Text>
                <FlatList
                    data={OccupationData}
                    renderItem={renderText}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 15 }}
                    contentContainerStyle={{ flexGrow: 1 }}
                />
                <FlatList
                    data={actorData}
                    renderItem={renderActor}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    style={{ marginTop: 15, width: "100%", marginBottom: 20 }}
                    contentContainerStyle={{ flex: 1, justifyContent: "space-evenly" }}
                />
                {/* <Text style={styles.chargeText}>Sort by charges</Text>
                <FlatList
                    data={actorData}
                    renderItem={renderActor}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 15 }}
                    contentContainerStyle={{ flexGrow: 1 }}
                /> */}
            </View>
        </ScrollView>
    );
};

export default WorkerScreen;