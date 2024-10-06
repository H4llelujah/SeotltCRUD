import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { NewsList } from "@/entities/News";
import { getNewsList } from "../model/selectors/newsPageSelectors";

interface NewsPageProps {
    className?: string;
}

export const NewsPage = memo((props: NewsPageProps) => {
    const { className } = props;

    const news = useSelector(getNewsList);

    if (!news) {
        return <div>Произошла ошибка!</div>;
    }

    return (
        <div className={classNames("", {}, [className])}>
            <NewsList isLoading={false} news={news} />
        </div>
    );
});
