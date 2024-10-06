import { useEffect } from "react";
import { AppRouter } from "./providers/router";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { NewsActions } from "@/entities/News";
import { NewsPageActions } from "@/pages/NewsPage";
import { MainLayout } from "@/shared/layouts/MainLayout/MainLayout";
import { Navbar } from "@/widgets/Navbar";

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(NewsPageActions.initNewsList());
    }, []);

    return (
        <div className="app">
            <MainLayout header={<Navbar />} content={<AppRouter />} />
        </div>
    );
};
