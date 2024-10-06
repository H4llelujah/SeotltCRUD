import { Button } from "@/shared/ui/Button/Button";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { NewsBlockType } from "../../model/consts/newsConsts";
import { NewsImageBlockComponent } from "../NewsImageBlockComponent/NewsImageBlockComponent";
import cls from './NewsDetails.module.scss';
import { NewsTextBlockComponent } from "../NewsTextBlockComponent/NewsTextBlockComponent";
import { NewsBlock } from "../../model/types/News";

export const renderNewsBlock = (
    block: NewsBlock,
    edit?: boolean,
    onDelete?: (id: string) => void,
) => {
    if (edit && onDelete) {
        switch (block.type) {
            case NewsBlockType.TEXT:
                return (
                    <VStack gap="8">
                        <NewsTextBlockComponent
                            block={block}
                            key={block.id}
                            className={cls.block}
                        />
                        <Button
                            color="error"
                            onClick={() => onDelete(block.id)}
                        >
                            Удалить блок
                        </Button>
                    </VStack>
                );
            case NewsBlockType.IMAGE:
                return (
                    <VStack gap="8">
                        <NewsImageBlockComponent
                            block={block}
                            key={block.id}
                            className={cls.block}
                        />
                        <Button
                            color="error"
                            onClick={() => onDelete(block.id)}
                        >
                            Удалить блок
                        </Button>
                    </VStack>
                );
            default:
                return null;
        }
    }
    switch (block.type) {
        case NewsBlockType.TEXT:
            return (
                <NewsTextBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        
        case NewsBlockType.IMAGE:
            return (
                <NewsImageBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        default:
            return null;
    }
};
