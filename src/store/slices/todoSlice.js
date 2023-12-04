import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectiveWithValue}) {
        try {
            const responce = await fetch('https://656dc1c5bcc5618d3c23e2c2.mockapi.io/api/v1/todo');
            const todoData = await responce.json();
            console.log(todoData);

            if(responce.ok) {
                return todoData;
            } else {
                throw new Error('Error to get data');
            }
        } catch (error) {
            return rejectiveWithValue(error.message);
        }
    }
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todoArray: [],
        loading: false,
    },
    reducers: {
        addTodo(state, action) {
            console.log(action);
            state.todoArray.push({ title: action.payload.text, status: false });
        },
        deleteTodo(state, action) {
            console.log(action);
            const todoRemove = action.payload;
            state.todoArray = state.todoArray.filter((todo, index) => index !== todoRemove);
        },
        updateTodo(state, action) {
            state.todoArray = state.todoArray.map((todo, index) =>
                index === action.payload ? { ...todo, status: !todo.status } : todo)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todoArray = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export const {
    addTodo,
    deleteTodo,
    updateTodo
} = todoSlice.actions;

export default todoSlice.reducer;