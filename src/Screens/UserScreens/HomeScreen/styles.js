import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    jobView: {
        marginTop: 10,
        width: "90%",
        alignSelf: "center",
        marginBottom: 100
    },
    row: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        borderBottomWidth: 0.5,
        borderColor: COLORS.white,
        marginVertical: 10,
    },
    newView: {
        marginTop: 18,
        marginBottom: 55,
        width: "100%"
    },
    person: {
        alignSelf: "center",
        marginLeft: 10
    },
    icon: {
        tintColor: COLORS.white,
        resizeMode: "contain",
        width: 30,
        height: 30,
        marginTop: 5,
        alignSelf: "center",
    },
    personText: {
        fontSize: 11,
        color: "#888"
    },
    name: {
        color: COLORS.white,
        fontSize: 13
    },
    innerView: {
        width: "48%",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: COLORS.greyish,
        height: 60,
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    mainView: {
        width: "100%",
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-between"
    },
    catFlat: {
        width: "80%"
    },
    viewTouch: {
        justifyContent: "center"
    },
    viewText: {
        color: COLORS.white,
        fontSize: 12,
    },
    catText: {
        color: COLORS.white,
        fontSize: 18,
        marginLeft: 10,
    },
    newsText: {
        color: COLORS.white,
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 10
    },
    categoryView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 18,
    },
    todayText: {
        color: COLORS.white,
        fontSize: 15,
        marginLeft: 10,
        marginTop: 15,
        fontWeight: 300
    },
    filterImage: {
        backgroundColor: COLORS.darkishBlue,
        justifyContent: "center",
        alignSelf: "center",
        width: 60,
        height: 50,
        borderRadius: 15
    },
    filter: {
        resizeMode: "contain",
        width: 22,
        height: 22,
        tintColor: COLORS.white,
        // marginLeft: 15
        alignSelf: "center"
    },
    textInput: {
        marginLeft: 10,
        width: "80%",
        height: 50,
        fontSize: 12
    },
    searchView: {
        backgroundColor: COLORS.lighGrey,
        borderRadius: 15,
        marginTop: 10,
        flexDirection: "row"
    },
    findText: {
        fontSize: 18,
        color: COLORS.white,
        marginLeft: 10,
    },
    textView: {
        width: "90%",
        alignSelf: "center",
    },
    hiText: {
        color: COLORS.white,
        fontSize: 12,
        marginLeft: 10
    },
    container: {
        backgroundColor: COLORS.black,
    },
});

export default styles;