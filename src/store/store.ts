import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat(

        ),
});

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
// Store Dispatch Type
export type AppDispatch = typeof store.dispatch;