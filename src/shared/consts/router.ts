export enum AppRoutes {
    MAIN = "main",
    NEWS = "news",
    NEWS_DETAILS = "news_details",
    NEWS_EDIT = "news_edit",
    NEWS_CREATE = "news_create",
    NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteNews = () => "/news";
export const getRouteNewsDetails = (id: string) => `/news/${id}`;
export const getRouteNewsEdit = (id: string) => `/news/${id}/edit`;
export const getRouteNewsCreate = () => `/news/create`;
