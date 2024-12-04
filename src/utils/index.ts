import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const IS_WEB = Platform.OS === 'web';

export const API_URL = IS_ANDROID
	? 'http://10.0.2.2:8080'
	: 'http://localhost:8080';
