import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
	COLORS,
	INPUT_HEIGHT,
	SHADOW_COLOR,
	SHADOW_OPACITY,
	SHADOW_RADIUS,
	SHADOW_WIDTH,
} from '@/src/utils/sharedStyles';

export default StyleSheet.create({
	inputContainer: {
		paddingTop: hp(1),
		backgroundColor: COLORS.white,
		paddingHorizontal: wp(4),
	},
	inputShadow: {
		shadowColor: SHADOW_COLOR,
		shadowOffset: { width: SHADOW_WIDTH, height: -2 },
		shadowOpacity: SHADOW_OPACITY,
		shadowRadius: SHADOW_RADIUS,
		elevation: 12,
	},
	inputContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input: {
		flex: 1,
		height: INPUT_HEIGHT,
		borderWidth: 1,
		borderRadius: 100,
		marginRight: 8,
		paddingHorizontal: 20,
		borderColor: COLORS.lightGray3,
	},
	addTodo: {
		borderRadius: 100,
		height: INPUT_HEIGHT,
		width: INPUT_HEIGHT,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.primaryBlue,
	},
});
