import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
    applyText: {
        color: COLORS.white,
        fontSize: 10
    },
    applyBtn: {
        backgroundColor: COLORS.skyBlue,
        width: 60,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginLeft: 5
    },
    des: {
        color: COLORS.white,
        fontSize: 10,
        color: "#888",
        width: "90%"
    },
    star: {
        resizeMode: "contain",
        width: 17,
        height: 17,
        alignSelf: "center",
        marginRight: 3
    },
    nameText: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: 300
    },
    textView: {
        width: "75%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        resizeMode: "contain",
        width: 70,
        height: 70,
        borderRadius: 40
    },
    inner: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        padding: 10
    },
    container: {
        backgroundColor: COLORS.greyish,
        width: "100%",
        height: "auto",
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        overflow: "visible"
    },
});

export default styles;