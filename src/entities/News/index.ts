export type { News } from "./model/types/News";
export type { NewsSchema } from "./model/types/NewsSchema";

export { NewsActions, NewsReducer } from "./model/slice/NewsSlice";

export { NewsList } from "./ui/NewsList/NewsList";

export { NewsDetails } from "./ui/NewsDetails/NewsDetails";

export { getNewsData, getNewsForm, getNewsError } from "./model/selectors/NewsSelector";

export { NewsBlockType } from "./model/consts/newsConsts";
