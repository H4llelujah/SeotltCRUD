import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { News, NewsActions, NewsBlockType } from "@/entities/News";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Button } from "@/shared/ui/Button/Button";
import { Card } from "@/shared/ui/Card/Card";
import { NewsCommonInfoEdit } from "@/features/newsCommonInfoEdit";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { renderNewsBlock } from "@/entities/News/ui/NewsDetails/renderBlock";
import { NewsBlockCreatorChooser } from "@/features/newsBlockCreator";

interface NewsEditingProps {
    className?: string;
    isEdit?: boolean;
    news?: Partial<News>;
}

export const NewsEditing = memo((props: NewsEditingProps) => {
    const { className, isEdit, news } = props;
    const dispatch = useAppDispatch();

    const onChangeImg = useCallback((value?: string) => {
        dispatch(NewsActions.updateNews({ img: value || "" }));
    }, []);

    const onChangeSubtitle = useCallback((value?: string) => {
        dispatch(NewsActions.updateNews({ subtitle: value || "" }));
    }, []);

    const onChangeTitle = useCallback((value?: string) => {
        dispatch(NewsActions.updateNews({ title: value || "" }));
    }, []);

    const onAddBlock = useCallback(
        (
            blockType: NewsBlockType,
            index: number,
            value: string,
            title: string
        ) => {
            dispatch(
                NewsActions.addNewBlock({ blockType, index, value, title })
            );
        },
        []
    );

    const onDelete = useCallback((blockId: string) => {
        dispatch(NewsActions.deleteBlock(blockId));
    }, []);

    const onSaveNews = useCallback(() => {
        dispatch(NewsActions.onSaveEdit());
        console.log(1);
    }, []);

    const onCancelEdit = useCallback(() => {}, []);

    return (
        <VStack max gap="16" className={classNames("", {}, [className])}>
            <HStack justify="between" max>
                <Button onClick={onSaveNews} color="error">
                    Отменить
                </Button>
                <Button onClick={onSaveNews} color="success">
                    Сохранить
                </Button>
            </HStack>
            <Card max padding="24">
                <NewsCommonInfoEdit
                    onChangeImg={onChangeImg}
                    onChangeSubtitle={onChangeSubtitle}
                    onChangeTitle={onChangeTitle}
                    imgLink={news?.img}
                    subtitle={news?.subtitle}
                    title={news?.title}
                />
                {news?.blocks?.map((block, index) => {
                    return (
                        <VStack gap="16" key={block.id}>
                            {renderNewsBlock(block, true, onDelete)}
                            <NewsBlockCreatorChooser
                                index={index}
                                onAddBlock={onAddBlock}
                            />
                        </VStack>
                    );
                })}
                {!news?.blocks?.length && (
                    <NewsBlockCreatorChooser
                        index={0}
                        onAddBlock={onAddBlock}
                    />
                )}
            </Card>
        </VStack>
    );
});
