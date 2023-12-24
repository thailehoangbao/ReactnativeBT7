import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/const'

export const StyleCam = StyleSheet.create({
    cItemContent_1: {
        borderRadius: 12,
        backgroundColor: COLORS.subcolor,
        width: '100%',
        height: 160,
        padding: SIZES.paddingMedium,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconsYoutube: {
        width:30,
        height:30,
        tintColor: COLORS.primarycolor,
        marginLeft:5
    }
})