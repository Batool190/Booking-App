import React from 'react';
import { FlatList, Text, View } from "react-native";
import LatestJobData from '../../Constants/LatestJobData';

const LatesJobs = () => {

    const renderLatestJob = ({ item }) => {
        console.log("renderLatestJob", item);
        return (
            <View style={{ backgroundColor: "red" }}>
                <Text style={{ color: "#fff" }}>{item.name}</Text>
            </View>
        );
    };

    return (
        // <FlatList
        //     data={LatestJobData}
        //     renderItem={renderLatestJob}
        //     keyExtractor={item => item.id}
        // />
        <Text style={{ backgroundColor: "red", flex: 1, color: "#fff" }}>{"item.name"}</Text>
    );
};

export default LatesJobs;