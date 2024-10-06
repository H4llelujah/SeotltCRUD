import { StateSchema } from "@/app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";

export const getNewsList = (state: StateSchema) => state.newsPage.data;

export const getNewsById = createSelector(
    getNewsList,
    (state: StateSchema, id: string) => id,
    (news, id) => news?.find((news) => news.id === id)
);
