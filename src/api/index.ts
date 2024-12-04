import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../utils/constants';
import { Todo } from '../utils/types';

const api = {
	get: async (url: string) => {
		const sessionToken = await AsyncStorage.getItem('sessionToken');

		const response = await axios.get(url, {
			headers: { Authorization: sessionToken },
		});
		return response;
	},
	post: async (url: string, data?: object) => {
		const sessionToken = await AsyncStorage.getItem('sessionToken');
		const response = await axios.post(url, data, {
			headers: { Authorization: sessionToken },
		});
		return response;
	},
	put: async (url: string, data?: object) => {
		const sessionToken = await AsyncStorage.getItem('sessionToken');
		const response = await axios.put(url, data, {
			headers: { Authorization: sessionToken },
		});
		return response;
	},
	delete: async (url: string) => {
		const sessionToken = await AsyncStorage.getItem('sessionToken');
		const response = await axios.delete(url, {
			headers: { Authorization: sessionToken },
		});
		return response;
	},
};

export const validateSession = async () => {
	const response = await api.get(`${API_URL}/validate-session`);
	return response;
};

export const startSession = async () => {
	const response = await api.post(`${API_URL}/start-session`);
	return response.data;
};

export const fetchTodos = async () => {
	const response = await api.get(`${API_URL}/todos`);
	return response?.data;
};

export const toggleTodo = async (
	id: Todo['id'],
	completed: Todo['completed']
) => {
	const response = await api.put(`${API_URL}/todos/${id}`, { completed });
	return response.data;
};

export const addTodo = async (title: Todo['title']) => {
	const response = await api.post(`${API_URL}/todos`, { title });
	return response.data;
};

export const deleteTodo = async (id: Todo['id']) => {
	const response = await api.delete(`${API_URL}/todos/${id}`);
	return response.data;
};
