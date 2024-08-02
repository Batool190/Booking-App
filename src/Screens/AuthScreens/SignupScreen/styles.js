import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    loader: {
        backgroundColor: COLORS.black,
        height: "100%",
        justifyContent: "center",
    },
    bouncyView: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
    },
    borderView: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
        width: "17%",
        alignSelf: "center",
        marginTop: 45
    },
    already: {
        color: COLORS.white,
        marginTop: "15%",
        alignSelf: "center",
        fontSize: 11
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
        borderRadius: 15,
        zIndex: -99
    },
    show: {
        color: COLORS.white,
        justifyContent: "center",
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
    email: {
        resizeMode: "contain",
        width: 25,
        height: 30,
        alignSelf: "center",
        marginRight: 10,
        marginTop: 5,
        marginLeft: -5,
        tintColor: COLORS.white
    },
    emailView: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
    },
    uploaded: {
        width: 150,
        height: 150,
        backgroundColor: "red",
        borderWidth: 2,
        borderRadius: 80,
        borderColor: COLORS.white,
    },
    upload: {
        resizeMode: "contain",
        tintColor: COLORS.white,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignSelf: "center"
    },
    touchBtn: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 80,
        borderColor: COLORS.white,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: "25%"
    },
    textView: {
        width: "90%",
        alignSelf: "center",
    },
    container: {
        backgroundColor: COLORS.black,
    },
});

export default styles