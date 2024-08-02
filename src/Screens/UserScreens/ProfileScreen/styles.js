import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        borderBottomWidth: 0.5,
        borderColor: COLORS.white,
        marginVertical: 10,
    },
    renderImage: {
        resizeMode: "contain",
        width: 100,
        height: 130,
        marginHorizontal: 2
    },
    scroll: {
        width: "80%",
        alignSelf: "center"
    },
    portfolioText: {
        fontSize: 18,
        color: COLORS.white,
        marginVertical: 15,
        marginLeft: 20,
    },
    lorem: {
        color: "#999",
        fontSize: 11
    },
    line: {
        flexDirection: "row"
    },
    stars: {
        resizeMode: "contain",
        width: 17,
        height: 17,
        alignSelf: "center",
        marginRight: 3
    },
    irfan: {
        fontSize: 18,
        color: COLORS.white,
    },
    actorText: {
        color: "#999",
        fontSize: 12,
    },
    textView: {
        width: "80%",
        alignSelf: "center"
    },
    textColor: {
        color: COLORS.white,
        fontSize: 10
    },
    jobTouch: {
        borderWidth: 1,
        height: 40,
        borderRadius: 15,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: COLORS.lightBlue,
        borderColor: COLORS.lightBlue
    },
    dateTouch: {
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: COLORS.grey,
        borderColor: COLORS.grey,
        paddingHorizontal: 10
    },
    btnView: {
        flexDirection: "row",
        height: "100%",
        justifyContent: "center",
    },
    image: {
        resizeMode: "contain",
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: "center",
    },
    picView: {
        width: "80%",
        alignSelf: "center",
        height: "15%",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    container: {
        backgroundColor: COLORS.black,
        height: "100%"
    }
});

export default styles;