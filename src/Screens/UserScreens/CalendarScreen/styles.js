import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    next: {
        fontSize: 15,
        color: COLORS.black,
        fontWeight: 500
    },
    touch: {
        width: "50%",
        justifyContent: "center",
        backgroundColor: COLORS.leafGreen,
        alignItems: "center",
    },
    price: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: 15
    },
    totalText: {
        color: COLORS.lightGreen,
        fontWeight: "bold",
        fontSize: 12
    },
    row: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomView: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        flexDirection: "row",
        height: 50
    },
    findText: {
        fontSize: 20,
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
        marginTop: 50
    },
    container: {
        backgroundColor: COLORS.black,
    },
});

export default styles;