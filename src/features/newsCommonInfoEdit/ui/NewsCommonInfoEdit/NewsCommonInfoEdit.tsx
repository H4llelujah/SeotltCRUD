import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Input } from "@/shared/ui/Input/Input";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { Loader } from "@/shared/ui/Loader/Loader";
import { ImageErrorFallback } from "@/shared/ui/ImageErrorFallback/ImageErrorFallback";
import cls from './NewsCommonInfoEdit.module.scss';

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
        <VStack gap="8" className={classNames("", {}, [className])}>
            <HStack max>
                <Input
                    value={title}
                    onChange={onChangeTitle}
                    placeholder="Заголовок"
                />
            </HStack>
            <HStack max>
                <Input
                    value={subtitle}
                    onChange={onChangeSubtitle}
                    placeholder="Подзаголовок"
                />
            </HStack>
            <HStack max>
                <Input
                    value={imgLink}
                    onChange={onChangeImg}
                    placeholder="Превью-фото(введите ссылку на изображение)"
                />
            </HStack>
            <HStack max>
                <AppImage
                    className={cls.img}
                    src={imgLink}
                    fallback={<Loader />}
                    errorFallback={<ImageErrorFallback />}
                />
            </HStack>
        </VStack>
    );
});
