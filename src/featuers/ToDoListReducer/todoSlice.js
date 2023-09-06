import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { 
    tasks: [{
      id: Math.random() * 100,
      title: 'Finishing to do list app',
      isDone: false,
    }],

 }


 const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addNewTask: (state, action) => {
        state.tasks = [...state?.tasks, action?.payload]
      },
      onDelete: (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      },
      onFinished: (state, action) => {
        let currentTask = state.tasks.find((task) => task.id === action.payload);
        let index = state.tasks.findIndex((task) => task.id === action.payload);
        currentTask = {...currentTask, isDone: true};
        state.tasks[index] = currentTask;
      }
      

    },
    // extraReducers: (builder ) => {
    //    builder
    //   },
  });
  
  
  export const { addNewTask, onDelete, onFinished } = todoSlice.actions;

  export default todoSlice.reducer;
  
  
  
// export const createTask = createAsyncThunk('todo/new-task', async (id, thunkAPI) => {
//     try {
//         console.log('hello')

//         return await authService.getAllUsers();
        
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error)
//     }

//  })
