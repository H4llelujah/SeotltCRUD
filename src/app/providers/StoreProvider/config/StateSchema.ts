import { CounterSchema } from "@/entities/Counter";
import { createReduxStore } from "./store";
import { NewsSchema } from "@/entities/News";
import { NewsPageSchema } from "@/pages/NewsPage";

export interface StateSchema {
    counter: CounterSchema;
    news: NewsSchema;
    newsPage: NewsPageSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];