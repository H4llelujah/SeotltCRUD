import { News } from "./News";

export interface NewsSchema {
    isLoading: boolean;
    error?: string;
    data?: News;
    form?: Partial<News>;
}
