import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../featuers/ToDoListReducer/todoSlice";

import modalReducer from "../featuers/ModalReducer/modalSlice";

export const store = configureStore({
    reducer: {
        todo: todoListReducer,
        modal: modalReducer,
    }
})
