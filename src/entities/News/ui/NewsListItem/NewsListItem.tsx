import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsListItem.module.scss";
import { News } from "../../model/types/News";
import { Card } from "@/shared/ui/Card/Card";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Text } from "@/shared/ui/Text/Text";
import { Loader } from "@/shared/ui/Loader/Loader";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { getRouteNewsDetails } from "@/shared/consts/router";
import { ImageErrorFallback } from "@/shared/ui/ImageErrorFallback/ImageErrorFallback";

interface NewsListItemProps {
    className?: string;
    news: News;
}

export const NewsListItem = memo((props: NewsListItemProps) => {
    const { className, news } = props;
    return (
        <Card max className={classNames(cls.NewsListItem, {}, [className, 'test'])}>
            <VStack className={cls.card}>
                <AppImage
                    className={cls.img}
                    src={news.img}
                    fallback={<Loader />}
                    errorFallback={<ImageErrorFallback />}
                />
                <Text title={news.title} />
                <Text className={cls.subtitle} text={news.subtitle} />
                <HStack className={cls.bottom} max justify="between">
                    <Text text={news.createdAt} />
                    <AppLink to={getRouteNewsDetails(news.id)}>
                        Подробнее
                    </AppLink>
                </HStack>
            </VStack>
        </Card>
    );
});
