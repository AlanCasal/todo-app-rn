import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '@/src/utils/colors';
import { Todo } from '@/src/utils/types';
import TodoItem from '../TodoItem';
import { LARGE_FONT_SIZE } from '@/src/utils/constants';
import { sharedStyles } from '@/src/utils/sharedStyles';

type Props = {
	todos: Todo[];
	handleToggleTodo: (id: Todo['id'], completed: Todo['completed']) => void;
	handleDeleteTodo: (id: Todo['id']) => void;
};

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }: Props) => {
	const renderTodoItem = ({ item, index }: { item: Todo; index: number }) => {
		const isLastItem = index === todos.length - 1;
		return (
			<TodoItem
				todo={item}
				handleToggleTodo={handleToggleTodo}
				handleDeleteTodo={handleDeleteTodo}
				isLastItem={isLastItem}
			/>
		);
	};

	return (
		<View style={[styles.listContainer, sharedStyles.maxWidthContainer]}>
			{!todos.length ? (
				<View style={styles.noTodosContainer}>
					<Text style={styles.noTodosText}>Start creating todos </Text>
					<FontAwesome5
						name="pen"
						size={LARGE_FONT_SIZE}
						color={colors.lightGray4}
					/>
				</View>
			) : (
				<FlatList
					data={todos}
					renderItem={renderTodoItem}
					keyExtractor={item => `${item.id}-${item.title}`}
					contentContainerStyle={styles.listContentContainer}
					showsVerticalScrollIndicator={false}
				/>
			)}
		</View>
	);
};

export default TodoList;
