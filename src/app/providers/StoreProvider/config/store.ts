import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { NewsReducer } from "@/entities/News";
import { NewsPageReducer } from "@/pages/NewsPage";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        news: NewsReducer,
        newsPage: NewsPageReducer,
    };

    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
    });

    return store;
}
