import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/const'


export const StyleUser= StyleSheet.create({
    cTitle: {
        padding: SIZES.paddingSmall
    },
    title: {
        color: COLORS.organblack,
        fontSize: FONTS.fontMedium,
        fontWeight: '700'
    },
    cbtnWrite: {
        position:'absolute',
        right: '5%',
        bottom: '20%'
    },
    btnWrite: {
        borderRadius: 40,
        width: 80,
        height: 80,
        backgroundColor: COLORS.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18
    }
})