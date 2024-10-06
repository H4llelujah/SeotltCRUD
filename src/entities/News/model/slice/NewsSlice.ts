import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewsSchema } from "../types/NewsSchema";
import { NEWS_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";

const initialState: NewsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    form: undefined,
};

export const NewsSlice = createSlice({
    name: "News",
    initialState,
    reducers: {
        
    },
});

export const { actions: NewsActions } = NewsSlice;
export const { reducer: NewsReducer } = NewsSlice;
