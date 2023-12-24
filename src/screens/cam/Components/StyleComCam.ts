import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../../constants/const'


export const StyleComCam = StyleSheet.create({
    cItemCam: {
        borderRadius: 24,
        backgroundColor: COLORS.subcolor,
        width:'100%',
        height: 220,
        padding: SIZES.paddingSmall,
        marginBottom: SIZES.marginSmall
    },
    ciconAvatarItem: {
        width:48,
        height:48,
        borderRadius: 24,
        backgroundColor: COLORS.grayColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconAvatarItem: {
        width:40,
        height:40,
        borderRadius: 20,
        backgroundColor: COLORS.primarycolor
    },
    cHeaderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    line: {
        marginTop: SIZES.marginMidium,
        marginBottom: SIZES.marginSmall,
        borderWidth: 0.3,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    btnItemActive: {
        borderRadius: 15,
        padding: SIZES.marginSmall,
        backgroundColor: COLORS.primarycolor,
        justifyContent:'center',
        alignItems: 'center',
    },
    btnItemUnActive: {
        borderRadius: 15,
        padding: SIZES.marginSmall,
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems: 'center',
    },
    btnTextActive: {
        color: COLORS.white,
        fontSize: FONTS.fontSemiSmall,
        fontWeight: '700'
    },
    btnTextUnActive: {
        color: COLORS.primarycolor,
        fontSize: FONTS.fontSemiSmall,
        fontWeight: '700'
    }
})