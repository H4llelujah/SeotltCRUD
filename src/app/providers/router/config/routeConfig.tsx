
import { MainPage } from "@/pages/MainPage";
import { AppRoutes, getRouteMain } from "@/shared/consts/router";
import { RouteProps } from "react-router-dom";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    }
}