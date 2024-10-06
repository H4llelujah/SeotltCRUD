import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsImageBlockCreator.module.scss";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { Input } from "@/shared/ui/Input/Input";

interface NewsImageBlockCreatorProps {
    className?: string;
    title?: string;
    link?: string;
    onChangeTitle: (value: string) => void;
    onChangeLink: (value: string) => void;
}

export const NewsImageBlockCreator = memo(
    (props: NewsImageBlockCreatorProps) => {
        const { className, link, title, onChangeTitle, onChangeLink } = props;

        return (
            <VStack
                className={classNames(cls.NewsImageBlockCreator, {}, [
                    className,
                ])}
            >
                <Input value={title} onChange={onChangeTitle} placeholder="Заголовок блока"/>
                <Input
                    value={link}
                    onChange={onChangeLink}
                    placeholder="Ссылка на изображение"
                />
            </VStack>
        );
    }
);
