import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    loginText: {
        color: "#999",
        fontSize: 13,
        width: "80%"
    },
    compName: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 400,
        marginLeft: 10
    },
    toText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 300
    },
    google: {
        resizeMode: "contain",
        width: 25,
        height: 30,
        alignSelf: "center",
        marginRight: 10,
        marginTop: 5,
    },
    googleText: {
        color: COLORS.white,
        fontSize: 12,
        alignSelf: "center",
        fontWeight: "bold"
    },
    googleBtn: {
        backgroundColor: COLORS.grey,
        height: 60,
        marginTop: 10,
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 15,
        flexDirection: "row",
        marginBottom: 50
    },
    email2: {
        resizeMode: "contain",
        width: 25,
        height: 30,
        alignSelf: "center",
        marginRight: 10,
        marginTop: 5,
        tintColor: COLORS.black
    },
    signUpBtn: {
        backgroundColor: COLORS.lightGreen2,
        height: 60,
        marginTop: 10,
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 15,
        flexDirection: "row"
    },
    create: {
        color: COLORS.white,
        alignSelf: "center",
        marginTop: "18%"
    },
    applyText: {
        color: COLORS.black,
        fontSize: 12,
        alignSelf: "center",
        fontWeight: "bold"
    },
    applyBtn: {
        backgroundColor: COLORS.lightGreen2,
        height: 60,
        marginTop: "15%",
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 15
    },
    forgotText: {
        color: COLORS.white,
        fontSize: 12
    },
    touch: {
        width: "92%",
        alignItems: "flex-end",
        marginTop: 10
    },
    show: {
        color: COLORS.white,
        // height: 55,
        justifyContent: "center",
        // marginTop: "55%",
        fontSize: 10,
        alignSelf: "center"
    },
    passView: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
        height: 55,
    },
    input: {
        width: "75%",
        color: COLORS.white
    },
    emailView: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
    },
    email: {
        resizeMode: "contain",
        width: 25,
        height: 30,
        alignSelf: "center",
        marginRight: 10,
        marginTop: 5,
        tintColor: COLORS.white
    },
    logo: {
        resizeMode: "contain",
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: "20%",
        borderRadius: 50
    },
    booking: {
        color: COLORS.lightGreen2,
        alignSelf: "flex-start",
        fontSize: 25,
        fontWeight: 500,
        marginTop: 30
    },
    textView: {
        width: "90%",
        alignSelf: "center",
    },
    container: {
        backgroundColor: COLORS.black,
    },
});

export default styles;