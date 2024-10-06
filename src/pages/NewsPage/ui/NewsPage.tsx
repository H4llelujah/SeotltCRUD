import { memo, useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { NewsList } from "@/entities/News";
import { getNewsList } from "../model/selectors/newsPageSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { NewsPageActions } from "../model/slice/NewsPageSlice";

interface NewsPageProps {
    className?: string;
}

const NewsPage = memo((props: NewsPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const news = useSelector(getNewsList);

    useEffect(() => {
        dispatch(NewsPageActions.initNewsList());
    }, [])

    if (!news) {
        return <div>Произошла ошибка!</div>;
    }

    return (
        <div className={classNames("", {}, [className])}>
            <NewsList isLoading={false} news={news} />
        </div>
    );
});

export default NewsPage;
