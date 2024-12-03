import colors from '@/src/utils/colors';
import { NORMAL_FONT_SIZE } from '@/src/utils/constants';
import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
	todoContainer: {
		paddingVertical: hp(1.6),
		flexDirection: 'row',
		alignItems: 'flex-start',
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGray2,
		justifyContent: 'space-between',
		gap: wp(2),
	},
	todoContent: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		flex: 1,
		gap: wp(2),
	},
	todo: {
		fontSize: NORMAL_FONT_SIZE,
		color: colors.black,
		textDecorationLine: 'none',
		fontStyle: 'normal',
		flexShrink: 1,
		marginTop: 1,
		overflow: 'hidden',
	},
	todoCompleted: {
		textDecorationLine: 'line-through',
		color: colors.lightGray4,
		fontStyle: 'italic',
		fontWeight: 400,
	},
	todoActionsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: wp(5),
	},
});
