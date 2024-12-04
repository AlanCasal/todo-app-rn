export interface Todo {
	id: number;
	title: string;
	completed: number;
}

// Define types for API responses
export type ApiResponse<T> = {
	data: T;
	// Add other response properties if needed
};

export type SessionToken = {
	token: string;
};
