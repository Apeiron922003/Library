
import { configureStore } from "@reduxjs/toolkit";
import { loanSlice } from "./slices/loanSlice";
import { bookSlice } from "./slices/bookSlice";

export const store = configureStore({
    reducer: {
        loan: loanSlice.reducer,
        book: bookSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch