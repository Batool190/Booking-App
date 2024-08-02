import React, {
    useState,
    useCallback,
    useEffect
} from 'react';
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ActivityIndicator
} from "react-native";
import styles from './styles';
import { launchImageLibrary } from 'react-native-image-picker';
import { COLORS } from '../../../Constants/COLORS';
import {
    gmail,
    passIcon,
    upload
} from '../../../Constants/Images';
import { useNavigation } from '@react-navigation/native';
import { getCategories, registerUser } from '../../../Store/Actions/AuthFunctions';
import DropDownPicker from "react-native-dropdown-picker";

const SignUpScreen = () => {

    const navigation = useNavigation();
    const [load, setLoad] = useState(false);
    const [photo, setPhoto] = useState();
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [pass, setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [secure, setSecure] = useState(true);
    const [open, setOpen] = useState(false);
    const [gen, setGen] = useState();
    const [getCat, setGetCat] = useState([]);

    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response?.didCancel == undefined) {
                let abc = response?.assets[0];
                let data = {
                    name: abc?.fileName,
                    type: abc?.type,
                    uri: abc?.uri
                };
                setPhoto(data);
            };
        });
    };

    const submit = () => {
        setLoad(true);
        if (email) {
            if (pass == confirmPass) {
                let emailTrim = email.trim();
                let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (emailRegex.test(emailTrim)) {
                    let data = {
                        firstName: fName,
                        lastName: lName,
                        email: email,
                        phoneNumber: phone,
                        password: pass,
                        picture: "photo",
                        categoryId: gen
                    };
                    registerUser(data, setLoad);
                } else {
                    alert("Please enter correct email");
                    setLoad(false);
                };
            } else {
                alert("Password and Confirm Password are not same");
                setLoad(false);
            };
        } else {
            setLoad(false);
            alert("Enter Fields");
        };
    };

    const genderData = useCallback(() => {
        getCategories(setGetCat);
    }, []);

    useEffect(() => {
        genderData();
    }, []);

    return (
        <>
            {load == true ? (
                <View style={styles.loader}>
                    <ActivityIndicator
                        size="large"
                        color={COLORS.leafGreen}
                    />
                </View>
            ) : (
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: "center" }}
                >
                    <View style={styles.textView}>
                        {photo != undefined ? (
                            <View style={styles.touchBtn}>
                                <Image source={{ uri: photo?.uri }} style={styles.uploaded} />
                            </View>
                        ) : (
                            <TouchableOpacity style={styles.touchBtn} onPress={() => handleChoosePhoto()}>
                                <Image source={upload} style={styles.upload} />
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
                        <View style={styles.emailView}>
                            <Image source={gmail} style={styles.email} />
                            <TextInput
                                value={fName}
                                onChangeText={setFName}
                                placeholder={"First Name"}
                                placeholderTextColor={COLORS.white}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.emailView}>
                            <Image source={gmail} style={styles.email} />
                            <TextInput
                                value={lName}
                                onChangeText={setLName}
                                placeholder={"Last Name"}
                                placeholderTextColor={COLORS.white}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.emailView}>
                            <Image source={gmail} style={styles.email} />
                            <TextInput
                                value={phone}
                                onChangeText={setPhone}
                                placeholder={"Phone No"}
                                placeholderTextColor={COLORS.white}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.emailView}>
                            <Image source={gmail} style={styles.email} />
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder={"Email"}
                                placeholderTextColor={COLORS.white}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.passView}>
                            <Image source={passIcon} style={styles.email} />
                            <TextInput
                                value={pass}
                                onChangeText={setPass}
                                placeholder={"Password"}
                                placeholderTextColor={COLORS.white}
                                style={styles.input}
                                secureTextEntry={secure}
                            />
                            <TouchableOpacity
                                onPress={() => setSecure(!secure)}
                                style={{ height: 55, justifyContent: "center" }}
                            >
                                <Text style={styles.show}>show</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.passView}>
                            <Image source={passIcon} style={styles.email} />
                            <TextInput
                                value={confirmPass}
                                onChangeText={setConfirmPass}
                                placeholder={"Confirm Password"}
                                placeholderTextColor={COLORS.white}
                                style={styles.input}
                                secureTextEntry={secure}
                            />
                            <TouchableOpacity
                                onPress={() => setSecure(!secure)}
                                style={{ height: 55, justifyContent: "center" }}
                            >
                                <Text style={styles.show}>show</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bouncyView}>
                            <DropDownPicker
                                open={open}
                                value={gen}
                                items={getCat}
                                schema={{
                                    label: "categoryType",
                                    value: "_id"
                                }}
                                setOpen={setOpen}
                                setValue={setGen}
                                placeholder="Select Category"
                                placeholderStyle={{
                                    color: COLORS.white,
                                    fontWeight: "bold",
                                    paddingHorizontal: 20
                                }}
                                disableBorderRadius={false}
                                style={{
                                    borderRadius: 50,
                                    borderWidth: 1,
                                    backgroundColor: "transparent",
                                    borderColor: COLORS.white,
                                }}
                                zIndex={999}
                                dropDownDirection="BOTTOM"
                                arrowIconStyle={{
                                    color: COLORS.white
                                }}
                                textStyle={{
                                    color: COLORS.white,
                                    paddingHorizontal: 20
                                }}
                                dropDownContainerStyle={{
                                    backgroundColor: COLORS.black,
                                    borderWidth: 1,
                                    borderColor: COLORS.white
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.applyBtn}
                            onPress={submit}
                        >
                            <Text style={styles.applyText}>Signup</Text>
                        </TouchableOpacity>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignSelf: "center",
                                width: "80%",
                                zIndex: -99
                            }}
                        >
                            <View style={styles.borderView} />
                            <Text style={styles.already}>Already have an account?</Text>
                            <View style={styles.borderView} />
                        </View>
                        <TouchableOpacity style={styles.applyBtn} onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.applyText}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ marginBottom: "15%" }} />
                    </View>
                </ScrollView>
            )}
        </>
    );
};

export default SignUpScreen;