import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsListItem.module.scss";
import { News } from "../../model/types/News";
import { Card } from "@/shared/ui/Card/Card";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import { Loader } from "@/shared/ui/Loader/Loader";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { getRouteNewsDetails } from "@/shared/consts/router";

interface NewsListItemProps {
    className?: string;
    news: News;
}

export const NewsListItem = memo((props: NewsListItemProps) => {
    const { className, news } = props;
    return (
        <Card className={classNames(cls.NewsListItem, {}, [className])}>
            <VStack>
                <AppImage className={cls.img} src={news.img} fallback={<Loader />} />
                <Text title={news.title} />
                <Text text={news.subtitle} />
                <HStack max justify="between">
                    <div>{news.createdAt}</div>
                    <AppLink to={getRouteNewsDetails(news.id)}>Подробнее</AppLink>
                </HStack>
            </VStack>
        </Card>
    );
});
