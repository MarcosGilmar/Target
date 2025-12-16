import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
    container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 16
    },
    content: {
        flex: 1,
        gap: 7
    },
    name: {
        fontFamily: fontFamily.medium,
        fontSize: 14,
        color: colors.black
    },
    status: {
        fontSize: 10,
        fontFamily: fontFamily.regular,
        color: colors.gray[500]
    }
})