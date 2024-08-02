import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    ScrollView,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import { COLORS } from '../../../Constants/COLORS';
import {
    gmail,
    google,
    logo,
    passIcon
} from '../../../Constants/Images';
import styles from './styles';
import { LoginUserApi } from '../../../Store/Actions/AuthFunctions';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [load, setLoad] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState();
    const [secure, setSecure] = useState(true);

    const login = () => {
        setLoad(true);
        if (email && pass) {
            let emailTrim = email.trim();
            let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (emailRegex.test(emailTrim)) {
                let data = {
                    email: emailTrim,
                    password: pass
                };
                LoginUserApi(data, dispatch, setLoad);
            } else {
                alert("Please enter correct email");
                setLoad(false);
            }
        } else {
            alert("Please enter all fields");
            setLoad(false);
        };
    };

    return (
        <>
            {load == true ? (
                <View
                    style={{
                        backgroundColor: COLORS.black,
                        height: "100%",
                        justifyContent: "center",
                    }}
                >
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
                        <Image source={logo} style={styles.logo} />
                        <View style={{ marginBottom: 30 }}>
                            <Text style={styles.booking}>Welcome</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.toText}>To</Text>
                                <Text style={styles.compName}>ABC Productions</Text>
                            </View>
                            <Text style={styles.loginText}>Please login to make your experience great using production app</Text>
                        </View>
                        <View>
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
                            <TouchableOpacity style={styles.touch}>
                                <Text style={styles.forgotText}>Forgot Password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.applyBtn} onPress={login}>
                                <Text style={styles.applyText}>Login</Text>
                            </TouchableOpacity>
                            <Text style={styles.create}>create an account?</Text>
                            <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate("Signup")}>
                                <Image source={gmail} style={styles.email2} />
                                <Text style={styles.applyText}>Signup with email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.googleBtn}>
                                <Image source={google} style={styles.google} />
                                <Text style={styles.googleText}>Signup with google</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView >
            )}
        </>
    );
};

export default LoginScreen;