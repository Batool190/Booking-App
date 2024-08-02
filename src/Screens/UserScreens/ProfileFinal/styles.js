import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    logText: {
        color: COLORS.white,
        fontSize: 12,
        alignSelf: "center"
    },
    logBtn: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: COLORS.white,
        borderRadius: 100,
        marginTop: 20,
        width: "70%"
    },
    editText: {
        color: COLORS.white,
        fontSize: 12
    },
    editnBtn: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: COLORS.white,
        borderRadius: 100,
        marginTop: 20
    },
    email: {
        color: "#999",
        fontSize: 10
    },
    name: {
        color: COLORS.white,
        marginTop: 15,
        fontSize: 14
    },
    profileImage: {
        resizeMode: "contain",
        width: 140,
        height: 140,
        borderRadius: 140,
        borderWidth: 4,
        borderColor: COLORS.leafGreen,
        marginTop: 50
    },
    container: {
        backgroundColor: COLORS.black,
    },
});

export default styles;