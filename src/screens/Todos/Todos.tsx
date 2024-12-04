import { Alert, SafeAreaView, Keyboard } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Todo } from '@/src/utils/types';
import { addTodo, deleteTodo, fetchTodos, toggleTodo } from '@/src/api';
import styles from './styles';
import Header from '@/src/components/Header';
import CustomTextInput from '@/src/components/CustomTextInput';
import TodoList from '@/src/components/TodoList';
import { AxiosError } from 'axios';

const TodosList = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [messageBody, setMessageBody] = useState('');

	const handleFetchTodos = useCallback(async () => {
		try {
			const todosList = await fetchTodos();

			setTodos(todosList.data);
		} catch (err) {
			let errorMessage = 'An unexpected error occurred';
			if (err instanceof AxiosError && err.response?.data.message)
				errorMessage = err.response?.data.message;

			Alert.alert('Error', errorMessage);
		}
	}, []);

	const handleToggleTodo = async (
		id: Todo['id'],
		completed: Todo['completed']
	) => {
		try {
			const newCompletedState = completed === 1 ? 0 : 1;
			await toggleTodo(id, newCompletedState);

			const updatedTodos = todos.map(todo =>
				todo.id === id ? { ...todo, completed: newCompletedState } : todo
			);

			setTodos(updatedTodos);
		} catch (err) {
			let errorMessage = 'An unexpected error occurred';
			if (err instanceof AxiosError) errorMessage = err.response?.data.message;
			Alert.alert('Error', errorMessage);
		}
	};

	const handleAddTodo = async () => {
		try {
			const response = await addTodo(messageBody);

			const { id } = response;

			setTodos([...todos, { title: messageBody, completed: 0, id }]);
			setMessageBody('');
		} catch (err) {
			let errorMessage = 'An unexpected error occurred';
			if (err instanceof AxiosError) errorMessage = err.response?.data.message;
			Alert.alert('Error', errorMessage);
		} finally {
			Keyboard.dismiss();
		}
	};

	const handleDeleteTodo = async (id: number) => {
		try {
			await deleteTodo(id);
			const updatedTodos = todos.filter(todo => todo.id !== id);
			setTodos(updatedTodos);
		} catch (err) {
			let errorMessage = 'An unexpected error occurred';
			if (err instanceof AxiosError) errorMessage = err.response?.data.message;
			Alert.alert('Error', errorMessage);
		}
	};

	useEffect(() => {
		handleFetchTodos();
	}, [handleFetchTodos]);

	const taskCount = todos.length;
	const completedCount = todos.filter(todo => todo.completed === 1).length;

	return (
		<SafeAreaView style={styles.container}>
			<Header taskCount={taskCount} completedCount={completedCount} />

			<TodoList
				todos={todos}
				handleToggleTodo={handleToggleTodo}
				handleDeleteTodo={handleDeleteTodo}
			/>

			<CustomTextInput
				messageBody={messageBody}
				setMessageBody={setMessageBody}
				handleAddTodo={handleAddTodo}
			/>
		</SafeAreaView>
	);
};

export default TodosList;
