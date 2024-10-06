import { StateSchema } from "@/app/providers/StoreProvider";

export const getNewsData = (state: StateSchema) => state.news.data;

export const getNewsForm = (state: StateSchema) => state.news.form;
