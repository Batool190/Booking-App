import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Header from '../../../Components/Header';
import News from '../../../Components/News';
import { COLORS } from '../../../Constants/COLORS';
import { stars, userCrop } from '../../../Constants/Images';
import LatesNewsData from '../../../Constants/LatestNewsData';
import PortfolioData from '../../../Constants/PortfolioData';
import styles from './styles';

const ProfileScreen = () => {

    const navigation = useNavigation();
    const [select, setSelect] = useState(0);

    const renderImages = ({ item }) => {
        return (
            <View>
                <Image source={item?.user} style={styles.renderImage} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.picView}>
                <Image source={userCrop} style={styles.image} />
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.dateTouch} onPress={() => navigation.navigate("Calendar")}>
                        <Text style={styles.textColor}>Check Dates</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.jobTouch}>
                        <Text style={styles.textColor}>Send Job Request</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.textView}>
                    <Text style={styles.actorText}>Actor</Text>
                    <View style={styles.line}>
                        <Text style={styles.irfan}>Irfan Raza</Text>
                        <View style={{ flexDirection: "row", marginLeft: 5 }}>
                            <Image source={stars} style={styles.stars} />
                            <Image source={stars} style={styles.stars} />
                            <Image source={stars} style={styles.stars} />
                            <Image source={stars} style={styles.stars} />
                            <Image source={stars} style={styles.stars} />
                        </View>
                    </View>
                </View>
                <View style={styles.scroll}>
                    <Text style={styles.lorem}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>
                <Text style={styles.portfolioText}>Portfolio</Text>
                <FlatList
                    data={PortfolioData}
                    renderItem={renderImages}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: "flex-start" }}
                    style={{ width: "100%", marginBottom: 10 }}
                />
                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => setSelect(0)}
                        style={{
                            borderBottomWidth: select == 0 ? 1 : 0,
                            borderColor: select == 0 ? COLORS.white : "",
                            paddingVertical: 15
                        }}
                    >
                        <Text style={{ color: "#fff", fontSize: 12 }}>
                            Latest Jobs
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSelect(1)}
                        style={{
                            borderBottomWidth: select == 1 ? 1 : 0,
                            borderColor: select == 1 ? COLORS.white : "",
                            paddingVertical: 15
                        }}
                    >
                        <Text style={{ color: "#fff", fontSize: 12 }}>Completed Jobs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSelect(2)}
                        style={{
                            borderBottomWidth: select == 2 ? 1 : 0,
                            borderColor: select == 2 ? COLORS.white : "",
                            paddingVertical: 15
                        }}
                    >
                        <Text style={{ color: "#fff", fontSize: 12 }}>Scheduled Jobs</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, width: "90%", alignSelf: "center" }}>
                    {LatesNewsData?.map(v => {
                        return (
                            <News image={v.image} name={v.name} description={v.description} key={v.id} />
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

export default ProfileScreen;