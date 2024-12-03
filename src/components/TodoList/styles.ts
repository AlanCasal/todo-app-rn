import colors from '@/src/utils/colors';
import { StyleSheet } from 'react-native';
import { LARGE_FONT_SIZE } from '@/src/utils/constants';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
	listContainer: {
		flex: 1,
		paddingHorizontal: wp(4),
	},
	noTodosContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 'auto',
		flexDirection: 'row',
	},
	noTodosText: {
		fontSize: LARGE_FONT_SIZE,
		color: colors.lightGray4,
	},
	listContentContainer: {
		paddingVertical: hp(1.5),
	},
});
