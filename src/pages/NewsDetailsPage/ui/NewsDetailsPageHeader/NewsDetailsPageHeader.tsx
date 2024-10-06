import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsDetailsPageHeader.module.scss";

import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { getRouteNewsEdit } from "@/shared/consts/router";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { NewsDeleteButton } from "@/features/newsDeleteButton";

interface NewsDetailsPageHeaderProps {
    className?: string;
    id: string;
}

export const NewsDetailsPageHeader = memo(
    (props: NewsDetailsPageHeaderProps) => {
        const { className, id } = props;

        return (
            <HStack
                max
                justify="between"
                className={classNames(cls.NewsDetailsPageHeader, {}, [
                    className,
                ])}
            >
                <NewsDeleteButton id={id} />
                <AppLink to={getRouteNewsEdit(id)}>Редактировать</AppLink>
            </HStack>
        );
    }
);
