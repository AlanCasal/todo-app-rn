import React from 'react';
import Loader from '@/src/components/Loader';
import { View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StartPage = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Loader size={hp(10)} />
		</View>
	);
};

export default StartPage;
