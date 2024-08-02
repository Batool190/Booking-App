import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
    name: {
        color: COLORS.lightGreen,
        fontWeight: "bold",
        fontSize: 13
    },
    jobText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: 400
    },
    dateText: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "bold"
    },
    textView: {
        width: "75%",
        marginLeft: 10,
    },
    inner: {
        width: "90%",
        height: 80,
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    userImage: {
        resizeMode: "contain",
        width: 80,
        height: 100,
        borderRadius: 20,
    },
    banner: {
        resizeMode: "contain",
        marginTop: 10,
        width: "100%",
        height: 120,
    }
});

export default styles;