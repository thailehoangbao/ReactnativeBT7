import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../../constants/const'



export const StyleComUser= StyleSheet.create({
    cItem: {
        borderRadius:10,
        padding: SIZES.paddingSmall,
        backgroundColor: COLORS.primarycolor,
        marginRight: SIZES.marginSmall
    },
    text: {
        color: COLORS.white,
        fontSize: FONTS.fontSemiSmall,
        fontWeight: '500'
    },
    cItemUnAc: {
        borderRadius:10,
        padding: SIZES.paddingSmall,
        backgroundColor: COLORS.superLight,
        marginRight: SIZES.marginSmall
    },
    textUnAc: {
        color: COLORS.secondarycolor,
        fontSize: FONTS.fontSemiSmall,
        fontWeight: '500'
    },
    iconsBoxChat: {
        tintColor: COLORS.secondarycolor
    },
    iconsBoxChatActive: {
        tintColor: COLORS.primarycolor
    },
    cBoxChat: {
        flexDirection:'row',
        padding:SIZES.paddingSmall
    }
})