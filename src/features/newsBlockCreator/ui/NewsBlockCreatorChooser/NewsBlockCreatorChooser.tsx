import { memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsBlockCreatorChooser.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { NewsBlockType } from "@/entities/News";
import { NewsTextBlockCreator } from "../NewsTextBlockCreator/NewsTextBlockCreator";
import { NewsImageBlockComponent } from "@/entities/News/ui/NewsImageBlockComponent/NewsImageBlockComponent";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { NewsImageBlockCreator } from "../NewsImageBlockCreator/NewsImageBlockCreator";
import { Text } from "@/shared/ui/Text/Text";

interface NewsBlockCreatorChooserProps {
    className?: string;
    index?: number;
    onAddBlock?: (
        blockType: NewsBlockType,
        index: number,
        value: string,
        title: string
    ) => void;
}

export const NewsBlockCreatorChooser = memo(
    (props: NewsBlockCreatorChooserProps) => {
        const { className, index, onAddBlock } = props;
        const [blockType, setBlockType] = useState<NewsBlockType>();
        const [isVisible, setIsVisible] = useState(false);

        const [title, setTitle] = useState<string>();
        const [value, setValue] = useState<string>();
        const [error, setError] = useState(false);

        const onChangeValue = useCallback((value: string) => {
            setValue(value);
        }, []);

        const onChangeTitle = useCallback((value: string) => {
            setTitle(value);
        }, []);

        const setTextBlockType = useCallback(() => {
            setBlockType(NewsBlockType.TEXT);
            setIsVisible(true);
        }, []);

        const setImageBlockType = useCallback(() => {
            setBlockType(NewsBlockType.IMAGE);
            setIsVisible(true);
        }, []);

        const onSave = useCallback(() => {
            if (index !== undefined && onAddBlock && blockType) {
                if (value && title) {
                    onAddBlock(blockType, index, value, title);
                    setIsVisible(false);
                    setValue("");
                    setTitle("");
                } else {
                    setError(true);
                }
            }
        }, [blockType, index, onAddBlock, title, value]);

        const onCancel = useCallback(() => {
            setIsVisible(false);
            setValue("");
            setTitle("");
        }, []);

        return (
            <div
                className={classNames(cls.NewsBlockCreatorChooser, {}, [
                    className,
                ])}
            >
                <HStack gap="8">
                    {error && (
                        <Text text="Все поля обязательны!" variant="error" />
                    )}
                    <Button onClick={setTextBlockType}>
                        Создать текстовый блок
                    </Button>
                    <Button onClick={setImageBlockType}>
                        Создать блок с изображением
                    </Button>
                </HStack>
                {isVisible && blockType === NewsBlockType.TEXT ? (
                    <NewsTextBlockCreator
                        title={title}
                        paragraph={value}
                        onChangeTitle={onChangeTitle}
                        onChangeParagraph={onChangeValue}
                    />
                ) : (
                    <NewsImageBlockCreator
                        link={value}
                        title={title}
                        onChangeLink={onChangeValue}
                        onChangeTitle={onChangeTitle}
                    />
                )}
                {isVisible && (
                    <HStack justify="between">
                        <Button onClick={onSave} color="success">
                            Сохранить
                        </Button>
                        <Button onClick={onCancel} color="error">
                            Отменить
                        </Button>
                    </HStack>
                )}
            </div>
        );
    }
);
