import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsEditing.module.scss";
import { News } from "@/entities/News";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Button } from "@/shared/ui/Button/Button";
import { Card } from "@/shared/ui/Card/Card";
import { NewsCommonInfoEdit } from "@/features/newsCommonInfoEdit";

interface NewsEditingProps {
    className?: string;
    isEdit?: boolean;
    news?: News;
}

export const NewsEditing = memo((props: NewsEditingProps) => {
    const { className, isEdit, news } = props;

    const onChangeImg = useCallback(() => {}, []);

    const onChangeSubtitle = useCallback(() => {}, []);

    const onChangeTitle = useCallback(() => {}, []);

    return (
        <VStack
            gap="16"
            className={classNames(cls.NewsEditing, {}, [className])}
        >
            <HStack justify="between" max>
                <Button color="error">Отменить</Button>
                <Button color="success">Сохранить</Button>
            </HStack>
            <Card padding="24">
                <NewsCommonInfoEdit
                    onChangeImg={onChangeImg}
                    onChangeSubtitle={onChangeSubtitle}
                    onChangeTitle={onChangeTitle}
                    imgLink={news?.img}
                    subtitle={news?.subtitle}
                    title={news?.title}
                />
            </Card>
        </VStack>
    );
});
