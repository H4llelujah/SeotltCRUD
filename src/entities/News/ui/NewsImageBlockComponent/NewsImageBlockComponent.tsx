import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsImageBlockComponent.module.scss";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { NewsImageBlock } from "../../model/types/News";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Text } from "@/shared/ui/Text/Text";

interface NewsImageBlockComponentProps {
    className?: string;
    block: NewsImageBlock;
}

export const NewsImageBlockComponent = memo(
    (props: NewsImageBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.NewsImageBlockComponent, {}, [
                    className,
                ])}
            >
                <Text title={block.title} />
                <AppImage src={block.src} fallback={<Loader />} />
            </div>
        );
    }
);
