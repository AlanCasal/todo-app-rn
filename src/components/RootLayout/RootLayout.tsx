/* eslint-disable no-console */
import React, { useCallback, useEffect } from 'react';
import { Slot, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Platform } from 'react-native';
import { startSession, validateSession } from '@/src/api';
import { StatusBar } from 'expo-status-bar';
import { AxiosError, isAxiosError } from 'axios';

const RootLayout = () => {
	const router = useRouter();

	const handleValidateSession = async () => {
		const token = await AsyncStorage.getItem('sessionToken');
		if (!token) return false;

		const response = await validateSession();

		switch (response?.status) {
			case 200:
				return token;
			case 401:
			default:
				await AsyncStorage.removeItem('sessionToken');
				return false;
		}
	};

	const handleError = (err: unknown) => {
		const defaultError = {
			title: 'Error',
			message: 'Session initialization failed. Please try again.',
		};

		if (!isAxiosError(err)) {
			console.log('[axios error]');
			Alert.alert(defaultError.title, defaultError.message);
			return;
		}

		const errorDetails = {
			title: `Error ${err.response?.status || ''}`.trim(),
			message: err.response?.data?.message || defaultError.message,
		};

		console.log('[error!!!]', err as AxiosError);

		Alert.alert(errorDetails.title, errorDetails.message);
	};

	const initializeSession = useCallback(async () => {
		try {
			let token = await handleValidateSession();
			const os = Platform.OS;
			console.log(`[${os} token]`, token);

			if (!token) {
				const response = await startSession();
				console.log(
					'%c[response]',
					'background: #003300; color: #b7ffb7',
					response
				);
				token = response.token as string;
				await AsyncStorage.setItem('sessionToken', token);
			}

			router.replace('/todos');
		} catch (err) {
			handleError(err);
		}
	}, [router]);

	useEffect(() => {
		initializeSession();
	}, [initializeSession]);

	return (
		<>
			<StatusBar style="dark" translucent />
			<Slot />
		</>
	);
};

export default RootLayout;
