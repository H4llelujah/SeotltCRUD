import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsTextBlockCreator.module.scss";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { Input } from "@/shared/ui/Input/Input";

interface NewsTextBlockCreatorProps {
    className?: string;
    title?: string;
    paragraph?: string;
    onChangeTitle: (value: string) => void;
    onChangeParagraph: (value: string) => void;
}

export const NewsTextBlockCreator = memo((props: NewsTextBlockCreatorProps) => {
    const { className, paragraph, title, onChangeParagraph, onChangeTitle } =
        props;
    return (
        <VStack
            className={classNames(cls.NewsTextBlockCreator, {}, [className])}
        >
            <Input
                placeholder="заголовок"
                value={title}
                onChange={onChangeTitle}
            />
            <div>здесь будет textarea</div>
        </VStack>
    );
});
