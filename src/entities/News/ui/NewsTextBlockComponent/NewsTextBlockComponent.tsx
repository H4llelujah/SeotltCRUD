import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsTextBlockComponent.module.scss";
import { Text } from "@/shared/ui/Text/Text";
import { NewsTextBlock } from "../../model/types/News";

interface NewsTextBlockComponentProps {
    className?: string;
    block: NewsTextBlock;
}

export const NewsTextBlockComponent = memo(
    (props: NewsTextBlockComponentProps) => {
        const { className, block } = props;
        return (
            <div
                className={classNames(cls.NewsTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && <Text title={block.title} />}
                {block.paragraphs.map((paragraph) => (
                    <Text key={paragraph} text={paragraph} />
                ))}
            </div>
        );
    }
);
