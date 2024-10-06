import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NEWS_LOCALSTORAGE_KEY } from '@/shared/consts/localStorage';
import { NewsPageSchema } from '../types/NewsPageSchema';

const initialState: NewsPageSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const NewsPageSlice = createSlice({
    name: 'NewsPage',
    initialState,
    reducers: {
        initNewsList: (state) => {
            const news = localStorage.getItem(NEWS_LOCALSTORAGE_KEY);

            if(news) {
                state.data = JSON.parse(news);
            };
        },
    },
});

export const { actions: NewsPageActions } = NewsPageSlice;
export const { reducer: NewsPageReducer } = NewsPageSlice;
