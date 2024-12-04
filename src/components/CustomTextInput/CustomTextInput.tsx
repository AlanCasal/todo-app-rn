import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
	TouchableOpacity,
	Platform,
	KeyboardAvoidingView,
	TextInput,
	KeyboardAvoidingViewProps,
	View,
} from 'react-native';
import styles from './styles';
import { IS_IOS } from '@/src/utils';
import { sharedStyles, COLORS } from '@/src/utils/sharedStyles';

type Props = {
	messageBody: string;
	setMessageBody: (text: string) => void;
	handleAddTodo: () => void;
};

const KEYBOARD_VERTICAL_OFFSET = 10;

const CustomTextInput = ({
	messageBody,
	setMessageBody,
	handleAddTodo,
}: Props) => {
	let behavior: KeyboardAvoidingViewProps['behavior'] = 'height';
	let keyboardVerticalOffset = 0;

	if (Platform.OS === 'ios') {
		behavior = 'padding';
		keyboardVerticalOffset = KEYBOARD_VERTICAL_OFFSET;
	}

	return (
		<KeyboardAvoidingView
			style={{
				...styles.inputContainer,
				...styles.inputShadow,
				...(IS_IOS
					? { marginBottom: KEYBOARD_VERTICAL_OFFSET }
					: { paddingBottom: KEYBOARD_VERTICAL_OFFSET }),
			}}
			behavior={behavior}
			keyboardVerticalOffset={keyboardVerticalOffset}
		>
			<View style={[styles.inputContent, sharedStyles.maxWidthContainer]}>
				<TextInput
					style={styles.input}
					// eslint-disable-next-line prettier/prettier
					placeholder="Write something..."
					placeholderTextColor={COLORS.lightGray4}
					onChangeText={setMessageBody}
					defaultValue={messageBody}
				/>
				<TouchableOpacity
					style={{
						...styles.addTodo,
						...(!messageBody.trim().length && {
							backgroundColor: COLORS.lightGray3,
						}),
					}}
					onPress={handleAddTodo}
					disabled={!messageBody.trim().length}
				>
					{/* eslint-disable-next-line prettier/prettier */}
					<Feather name="plus" size={18} color={COLORS.white} />
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default CustomTextInput;
