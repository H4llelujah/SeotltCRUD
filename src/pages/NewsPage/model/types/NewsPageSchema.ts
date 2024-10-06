import { News } from "@/entities/News";

export interface NewsPageSchema {
    data?: News[];
    error?: string;
    isLoading: boolean;
}
