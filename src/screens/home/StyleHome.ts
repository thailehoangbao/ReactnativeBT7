import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/const'

export const StyleHome = StyleSheet.create({
    //Title
    cTitle: { paddingLeft: SIZES.paddingSmall, paddingRight: SIZES.paddingSmall, paddingBottom: SIZES.paddingSmall },
    title_1 : { fontWeight: '300', fontSize: FONTS.fontNormal },
    title_2: { fontWeight: '700', fontSize: FONTS.fontNormal },
    title_3: { fontWeight: '500', fontSize: FONTS.fontSmall, paddingTop: SIZES.paddingSmall,paddingBottom:SIZES.paddingSmall },
    //Content
    cContentHome: {
        padding: SIZES.paddingSmall,
    },
    iconsCalendar: {
        width: 24,
        height: 24,
        tintColor: COLORS.primarycolor
    },
    cItemContent_1: {
        borderRadius: 12,
        backgroundColor: COLORS.subcolor,
        width: '100%',
        height: 160,
        padding: SIZES.paddingSmall,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cItemContent_2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: SIZES.paddingSmall
    },
    itemContent_2: {
        borderRadius: 16,
        backgroundColor: COLORS.superLight,
        flexDirection: 'row',
        flex:1,
        padding: SIZES.paddingMedium,
        alignItems: 'center',
    },
    itemTextContent_2: {
        color: COLORS.organblack,
        fontWeight: '700',
        fontSize: FONTS.fontNormal,
        marginLeft: SIZES.marginSmall
    },
    cItemContent_3: {
        borderRadius: 16,
        backgroundColor: COLORS.superLight,
        padding: SIZES.paddingMedium,
        flexDirection: "row",
        marginTop: SIZES.marginSmall,
        alignItems: "center",
    },
    itemTextContent_3: {
        color: COLORS.backGray,
        fontSize: FONTS.fontSemiSmall,
        fontWeight: '500',
        flex:1
    },
    iconContent_3: {
        tintColor: COLORS.backGray
    },
    cItemContent_4 : {
        borderRadius: 12,
        backgroundColor: COLORS.greenColor,
        width: '100%',
        height: 160,
        padding: SIZES.paddingSmall,
        flexDirection: 'row',
        alignItems: 'center',
    }
})