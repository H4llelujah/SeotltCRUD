import { CounterSchema } from "@/entities/Counter";
import { createReduxStore } from "./store";

export interface StateSchema {
    counter: CounterSchema
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];