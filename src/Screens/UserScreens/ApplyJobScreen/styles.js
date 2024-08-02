import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    applyText: {
        color: COLORS.black,
        fontSize: 12,
        alignSelf: "center"
    },
    applyBtn: {
        backgroundColor: COLORS.lightGreen2,
        height: 60,
        marginTop: 20,
        width: 150,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 15
    },
    calendar: {
        marginVertical: 30
    },
    description: {
        color: "#999",
        width: "95%",
        fontSize: 10,
        flexWrap: "wrap"
    },
    heading: {
        color: COLORS.white,
        fontSize: 15
    },
    star: {
        resizeMode: "contain",
        width: 15,
        height: 20,
        marginHorizontal: 2
    },
    actor: {
        color: "#999",
        fontSize: 11
    },
    name: {
        color: COLORS.white,
        fontSize: 12,
        marginTop: 10,
        fontWeight: 300
    },
    jobView: {
        marginLeft: 15,
        width: "70%",
        flexWrap: "wrap"
    },
    userInfo: {
        height: 230,
        width: "30%",
    },
    profileImage: {
        resizeMode: "contain",
        width: "100%",
        height: 120,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: COLORS.white,
    },
    userView: {
        flexDirection: "row",
        width: "100%",
    },
    innerContainer: {
        width: "90%",
        marginTop: 45,
        alignSelf: "center"
    },
    container: {
        backgroundColor: COLORS.black,
        height: "100%"
    },
});

export default styles;