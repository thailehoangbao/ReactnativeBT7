import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../constants/const'

export const StyleComHome = StyleSheet.create({
    ciconsTitleHome: {
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: COLORS.primarycolor,
        padding:SIZES.paddingSuperSmall,
        marginRight: SIZES.marginSmall
    },
    iconsTitleHome: {
        width: 32,
        height:32,
        tintColor: COLORS.white
    }
})