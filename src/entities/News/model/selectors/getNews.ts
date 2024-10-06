import { StateSchema } from "@/app/providers/StoreProvider";

export const getNews = (state: StateSchema) => state.news.data || [];

