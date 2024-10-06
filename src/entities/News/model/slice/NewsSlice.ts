import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewsSchema } from "../types/NewsSchema";
import { News, NewsBlock } from "../types/News";
import {
    LOCAL_STORAGE_NEWS_EDIT_KEY,
    NEWS_LOCALSTORAGE_KEY,
} from "@/shared/consts/localStorage";
import { NewsBlockType } from "../consts/newsConsts";
import { v4 as uuidv4 } from 'uuid';

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
        newsInit: (state, action: PayloadAction<string>) => {
            const data = localStorage.getItem(NEWS_LOCALSTORAGE_KEY);
            if (data) {
                const newsList = JSON.parse(data) as News[];
                const newsItem = newsList.find(
                    (item) => item.id === action.payload
                );
                state.data = newsItem;
                state.form = newsItem;
                localStorage.setItem(
                    LOCAL_STORAGE_NEWS_EDIT_KEY,
                    JSON.stringify(state.data)
                );
            }
        },
        setForm(state, action: PayloadAction<boolean>) {
            const savedFormData = localStorage.getItem(
                LOCAL_STORAGE_NEWS_EDIT_KEY
            );
            if (savedFormData) {
                try {
                    const draft = JSON.parse(savedFormData) as News;
                    if (draft.id && !action.payload) {
                        state.form = undefined;
                    } else {
                        state.form = draft;
                    }
                } catch (error) {
                    console.log(
                        "Error parsing news form data from localStorage:",
                        error
                    );
                    state.form = undefined;
                }
            } else {
                state.form = undefined;
            }
        },
        updateNews: (state, action: PayloadAction<Partial<News>>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
            localStorage.setItem(
                LOCAL_STORAGE_NEWS_EDIT_KEY,
                JSON.stringify(state.form)
            );
        },
        addNewBlock: (
            state,
            {
                payload,
            }: PayloadAction<{
                blockType: NewsBlockType;
                index: number;
                value: string;
                title: string;
            }>
        ) => {
            let newBlock: NewsBlock;
            if (payload.blockType === NewsBlockType.TEXT) {
                newBlock = {
                    id: uuidv4(),
                    type: NewsBlockType.TEXT,
                    title: payload.title,
                    paragraphs: payload.value.split('\n'),
                };
            } else {
                newBlock = {
                    id: uuidv4(),
                    type: NewsBlockType.IMAGE,
                    title: payload.title,
                    src: payload.value,
                };
            }
            if (state.form) {
                state.form.blocks = state.form.blocks ?? [];

                state.form.blocks.splice(payload.index + 1, 0, newBlock);

                localStorage.setItem(
                    LOCAL_STORAGE_NEWS_EDIT_KEY,
                    JSON.stringify(state.form),
                );
            }
        },
        deleteBlock: (state, action: PayloadAction<string>) => {
            if (state.form) {
                state.form.blocks = state.form.blocks?.filter((item) => item.id !== action.payload)
            }
            localStorage.setItem(
                LOCAL_STORAGE_NEWS_EDIT_KEY,
                JSON.stringify(state.form)
            );
        }
    },
});

export const { actions: NewsActions } = NewsSlice;
export const { reducer: NewsReducer } = NewsSlice;
