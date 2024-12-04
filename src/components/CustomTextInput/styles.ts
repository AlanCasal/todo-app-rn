import colors from '@/src/utils/colors';
import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const INPUT_HEIGHT = 48;

export default StyleSheet.create({
	inputContainer: {
		paddingTop: hp(1),
		backgroundColor: colors.white,
		paddingHorizontal: wp(4),
	},
	inputShadow: {
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.06,
		shadowRadius: 2,
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
		borderColor: colors.lightGray3,
	},
	addTodo: {
		borderRadius: 100,
		height: INPUT_HEIGHT,
		width: INPUT_HEIGHT,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.primaryBlue,
	},
});
