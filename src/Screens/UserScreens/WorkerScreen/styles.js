import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    chargeText: {
        fontSize: 30,
        color: COLORS.white,
        marginLeft: 10,
        marginTop: 15
    },
    details: {
        color: COLORS.white,
        alignSelf: "center",
        fontSize: 11
    },
    btnView: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "#222",
        marginHorizontal: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10
    },
    row3: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    projectText: {
        color: COLORS.white,
        fontSize: 11,
        color: "#999"
    },
    row2: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    star: {
        resizeMode: "contain",
        width: 15,
        height: 15,
        marginHorizontal: 2
    },
    name: {
        color: COLORS.white,
        fontWeight: 400,
        fontSize: 15,
    },
    row1: {
        flexDirection: "row",
    },
    actorCard: {
        width: "45%",
        marginHorizontal: 5,
        marginVertical: 5,
    },
    profileImage: {
        width: "100%",
        height: "100%",
    },
    card: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "#222",
        marginHorizontal: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    cardSelect: {
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: COLORS.leafGreen,
        marginHorizontal: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: COLORS.leafGreen,
    },
    findText: {
        fontSize: 18,
        color: COLORS.white,
        marginLeft: 10,
    },
    hiText: {
        color: COLORS.white,
        fontSize: 12,
        marginLeft: 10
    },
    textView: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 50
    },
    container: {
        backgroundColor: COLORS.black,
    },
});

export default styles;