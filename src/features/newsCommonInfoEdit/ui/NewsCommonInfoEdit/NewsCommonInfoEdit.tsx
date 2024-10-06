import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsCommonInfoEdit.module.scss";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Input } from "@/shared/ui/Input/Input";
import { AppImage } from "@/shared/ui/AppImage/AppImage";

interface NewsCommonInfoEditProps {
    className?: string;
    title?: string;
    subtitle?: string;
    imgLink?: string;
    onChangeTitle: () => void;
    onChangeSubtitle: () => void;
    onChangeImg: () => void;
}

export const NewsCommonInfoEdit = memo((props: NewsCommonInfoEditProps) => {
    const {
        className,
        onChangeImg,
        onChangeSubtitle,
        onChangeTitle,
        imgLink,
        subtitle,
        title,
    } = props;

    return (
        <VStack className={classNames(cls.NewsCommonInfoEdit, {}, [className])}>
            <HStack>
                <Input placeholder="Заголовок новости" />
            </HStack>
            <HStack>
                <Input placeholder="Подзаголовок" />
            </HStack>
            <HStack>
                <Input placeholder="Превью-фото(введите ссылку на изображение)" />
            </HStack>
            <AppImage />
        </VStack>
    );
});
