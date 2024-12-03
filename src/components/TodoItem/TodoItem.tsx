import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import styles from './styles';
import colors from '@/src/utils/colors';
import { Todo } from '@/src/utils/types';

type Props = {
	todo: Todo;
	handleToggleTodo: (id: Todo['id'], completed: Todo['completed']) => void;
	handleDeleteTodo: (id: Todo['id']) => void;
	isLastItem: boolean;
};

const TodoItem = ({
	todo,
	handleToggleTodo,
	handleDeleteTodo,
	isLastItem,
}: Props) => {
	return (
		<View
			style={[styles.todoContainer, { borderBottomWidth: isLastItem ? 0 : 1 }]}
		>
			<View style={styles.todoContent}>
				<TouchableOpacity
					onPress={() => handleToggleTodo(todo.id, todo.completed)}
				>
					<Feather
						name={todo.completed ? 'check-square' : 'square'}
						size={18}
						color={todo.completed ? colors.primaryBlue : colors.lightGray3}
					/>
				</TouchableOpacity>
				<Text
					style={{
						...styles.todo,
						...(todo.completed && styles.todoCompleted),
					}}
				>
					{todo.title}
				</Text>
			</View>
			<View style={styles.todoActionsContainer}>
				<Feather name="edit-3" size={18} color={colors.lightGray3} />
				<TouchableOpacity onPress={() => handleDeleteTodo(todo.id)}>
					<Ionicons name="trash-bin" size={18} color={colors.red} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TodoItem;
