import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.grey,
        width: "45%",
        flexDirection: "row",
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 50,
        // position: "absolute",
        // bottom: 0
    },
    done: {
        resizeMode: "contain",
        tintColor: "green",
        width: 20,
        height: 20,
    },
    cancel: {
        resizeMode: "contain",
        tintColor: "red",
        width: 20,
        height: 20
    },
    demoText: {
        color: COLORS.white,
        fontSize: 12,
        marginLeft: 10,
        marginTop: 5,
    },
    hiText: {
        color: COLORS.white,
        fontSize: 15,
        marginLeft: 10
    },
    textView: {
        width: "90%",
        alignSelf: "center",
        marginTop: 50
    },
    container: {
        backgroundColor: COLORS.black,
        height: "100%"
    },
});

export default styles;