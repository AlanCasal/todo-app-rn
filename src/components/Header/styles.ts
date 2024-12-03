import colors from '@/src/utils/colors';
import { StyleSheet } from 'react-native';
import {
	NORMAL_FONT_SIZE,
	SMALL_FONT_SIZE,
	LARGE_FONT_SIZE,
	IS_WEB,
} from '@/src/utils/constants';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
	header: {
		paddingBottom: hp(2),
		marginTop: IS_WEB ? hp(2) : 0,
		borderBottomWidth: 3,
		borderBottomColor: colors.primaryBlue,
	},
	headerShadow: {
		backgroundColor: 'white',
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.06,
		shadowRadius: 2,
		elevation: 8,
	},
	content: {
		paddingHorizontal: wp(4),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontSize: LARGE_FONT_SIZE,
		fontWeight: 700,
		color: colors.primaryBlueText,
	},
	tasksCompletedContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	tasksCompleted: {
		color: colors.primaryGreen,
		fontSize: NORMAL_FONT_SIZE,
		fontWeight: 700,
	},
	taskCount: {
		color: colors.lightGray5,
		fontSize: NORMAL_FONT_SIZE,
	},
	userContainer: {
		alignItems: 'center',
		gap: 2,
	},
	anonymousUser: {
		color: colors.lightGray5,
		fontSize: SMALL_FONT_SIZE,
		textAlign: 'center',
	},
});
