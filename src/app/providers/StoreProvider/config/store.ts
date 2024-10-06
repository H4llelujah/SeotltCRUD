import { counterReducer } from "@/entities/Counter";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";

export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
    };

    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
    });

    return store;
}