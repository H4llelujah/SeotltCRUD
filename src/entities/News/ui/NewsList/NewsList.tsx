import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsList.module.scss";
import { News } from "../../model/types/News";
import { NewsListItem } from "../NewsListItem/NewsListItem";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";

interface NewsListProps {
    className?: string;
    news: News[];
    isLoading: boolean;
}

export const NewsList = memo((props: NewsListProps) => {
    const { className, news, isLoading } = props;

    const renderNews = (news: News) => (
        <NewsListItem news={news} key={news.id} />
    );

    if (!isLoading && !news.length) {
        return <div>Пока что нет новостей!</div>;
    }

    return (
        <div className={classNames(cls.NewsList, {}, [className])}>
            <HStack wrap="wrap" gap="16">
                {news.length > 0 ? news.map(renderNews) : null}
                {isLoading && <div>loading...</div>}
            </HStack>
        </div>
    );
});
