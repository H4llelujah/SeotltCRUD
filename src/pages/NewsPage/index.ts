export { NewsPageAsync as NewsPage } from "./ui/NewsPageAsync";

export { NewsPageActions, NewsPageReducer } from "./model/slice/NewsPageSlice";

export type { NewsPageSchema } from "./model/types/NewsPageSchema";

export { getNewsById } from "./model/selectors/newsPageSelectors";
