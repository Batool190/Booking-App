import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Banner from '../../../Components/Banner';
import News from '../../../Components/News';
import { COLORS } from '../../../Constants/COLORS';
import {
    cameraMan,
    chairs,
    filter,
    lights,
    makeup,
} from '../../../Constants/Images';
import LatesNewsData from '../../../Constants/LatestNewsData';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotificationData from '../../../Constants/NotificationData';
import Header from '../../../Components/Header';
import { useSelector } from 'react-redux';

const HomeScreen = () => {

    const navigation = useNavigation();
    const [search, setSearch] = useState();
    const [val, setVal] = useState('');
    const [select, setSelect] = useState(0);

    const AuthState = useSelector(state => {
        return state?.AuthReducer?.UserDetail;
    });

    // console.log("AuthState", AuthState);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('login')
            if (value !== null) {
                setVal(value);
            };
        } catch (e) {
            console.log("getData error", e);
        };
    };

    useEffect(() => {
        getData();
    }, [0]);

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ justifyContent: "center" }}
        >
            <Header />
            <View style={styles.textView}>
                <Text style={styles.hiText}>Hi {AuthState?.firstName} {AuthState?.lastName}</Text>
                <Text style={styles.findText}>Find your best resource</Text>
                <View style={styles.searchView}>
                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder={"Search"}
                        placeholderTextColor={COLORS.white}
                        style={styles.textInput}
                    />
                    <View style={styles.filterImage}>
                        <Image source={filter} style={styles.filter} />
                    </View>
                </View>
                <Text style={styles.todayText}>Today's job</Text>
                <Banner />
            </View>
            {AuthState?.categoryId?.type !== "seller" ? (
                <>
                    <View style={styles.textView}>
                        <View style={styles.categoryView}>
                            <Text style={styles.catText}>Categories</Text>
                            <TouchableOpacity style={styles.viewTouch} onPress={() => navigation.navigate("Worker")}>
                                <Text style={styles.viewText}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainView}>
                            <TouchableOpacity style={styles.innerView} onPress={() => navigation.navigate("Worker")}>
                                <View
                                    style={{
                                        backgroundColor: "#a067fb",
                                        height: 45,
                                        alignSelf: "center",
                                        width: 45,
                                        borderRadius: 25
                                    }}
                                >
                                    <Image source={cameraMan} style={styles.icon} />
                                </View>
                                <View style={styles.person}>
                                    <Text style={styles.name}>Camera Man</Text>
                                    <Text style={styles.personText}>20 persons</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.innerView} onPress={() => navigation.navigate("Worker")}>
                                <View
                                    style={{
                                        backgroundColor: "#f98c92",
                                        height: 45,
                                        alignSelf: "center",
                                        width: 45,
                                        borderRadius: 25
                                    }}
                                >
                                    <Image source={lights} style={styles.icon} />
                                </View>
                                <View style={styles.person}>
                                    <Text style={styles.name}>Light's</Text>
                                    <Text style={styles.personText}>10 persons</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainView}>
                            <TouchableOpacity style={styles.innerView} onPress={() => navigation.navigate("Worker")}>
                                <View
                                    style={{
                                        backgroundColor: "#93c97b",
                                        height: 45,
                                        alignSelf: "center",
                                        width: 45,
                                        borderRadius: 25
                                    }}
                                >
                                    <Image source={chairs} style={styles.icon} />
                                </View>
                                <View style={styles.person}>
                                    <Text style={styles.name}>Director</Text>
                                    <Text style={styles.personText}>5 persons</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.innerView} onPress={() => navigation.navigate("Worker")}>
                                <View
                                    style={{
                                        backgroundColor: "#a067fb",
                                        height: 45,
                                        alignSelf: "center",
                                        width: 45,
                                        borderRadius: 25
                                    }}
                                >
                                    <Image source={makeup} style={styles.icon} />
                                </View>
                                <View style={styles.person}>
                                    <Text style={styles.name}>Makeup Artist</Text>
                                    <Text style={styles.personText}>20 persons</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.newView}>
                            <Text style={styles.newsText}>Notifications</Text>
                            {LatesNewsData?.map(v => {
                                return (
                                    <News image={v.image} name={v.name} description={v.description} key={v.id} />
                                );
                            })}
                        </View>
                    </View>
                </>
            ) : (
                <>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => setSelect(0)}
                            style={{
                                borderBottomWidth: select == 0 ? 1 : 0,
                                borderColor: select == 0 ? COLORS.white : "",
                                paddingVertical: 15
                            }}
                        >
                            <Text style={{ color: "#fff", fontSize: 12 }}>Latest Jobs</Text>
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
                    <View style={styles.jobView}>
                        {NotificationData?.map(v => {
                            return (
                                <News image={v.image} name={v.name} description={v.description} key={v.id} view={1} />
                            );
                        })}
                    </View>
                </>
            )}
        </ScrollView >
    );
};

export default HomeScreen;