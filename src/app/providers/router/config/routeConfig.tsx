import { MainPage } from "@/pages/MainPage";
import { NewsDetailsPage } from "@/pages/NewsDetailsPage";
import { NewsEditPage } from "@/pages/NewsEditPage";
import { NewsPage } from "@/pages/NewsPage";
import {
    AppRoutes,
    getRouteMain,
    getRouteNews,
    getRouteNewsCreate,
    getRouteNewsDetails,
    getRouteNewsEdit,
} from "@/shared/consts/router";
import { RouteProps } from "react-router-dom";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.NEWS]: {
        path: getRouteNews(),
        element: <NewsPage />,
    },
    [AppRoutes.NEWS_DETAILS]: {
        path: getRouteNewsDetails(":id"),
        element: <NewsDetailsPage />,
    },
    [AppRoutes.NEWS_EDIT]: {
        path: getRouteNewsEdit(":id"),
        element: <NewsEditPage />,
    },
    [AppRoutes.NEWS_CREATE]: {
        path: getRouteNewsCreate(),
        element: <NewsEditPage />,
    },
};
