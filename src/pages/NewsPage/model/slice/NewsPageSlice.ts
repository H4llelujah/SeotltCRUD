import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NEWS_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { NewsPageSchema } from "../types/NewsPageSchema";

const initialState: NewsPageSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const NewsPageSlice = createSlice({
    name: "NewsPage",
    initialState,
    reducers: {
        initNewsList: (state) => {
            const news = localStorage.getItem(NEWS_LOCALSTORAGE_KEY);

            if (news) {
                state.data = JSON.parse(news);
            }
        },
        deleteById: (state, action: PayloadAction<string>) => {
            const newNews = state.data?.filter(
                (item) => item.id !== action.payload
            );
            state.data = newNews;
            localStorage.setItem(
                NEWS_LOCALSTORAGE_KEY,
                JSON.stringify(newNews)
            );
        },
    },
});

export const { actions: NewsPageActions } = NewsPageSlice;
export const { reducer: NewsPageReducer } = NewsPageSlice;
