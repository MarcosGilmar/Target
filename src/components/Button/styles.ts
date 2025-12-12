import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/theme"

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        backgroundColor: colors.blue[500],
        width: 354,
        height: 48,
        borderRadius: 8
    },
    title: {
        color: colors.white,
        fontFamily: fontFamily.medium,
        fontSize: 14
    }
})