import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsDetails.module.scss";
import { News } from "../../model/types/News";
import { Text } from "@/shared/ui/Text/Text";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { Loader } from "@/shared/ui/Loader/Loader";
import { renderNewsBlock } from "./renderBlock";
import { getNewsById } from "@/pages/NewsPage";
import { useSelector } from "react-redux";
import { StateSchema } from "@/app/providers/StoreProvider";
import { Card } from "@/shared/ui/Card/Card";

interface NewsDetailsProps {
    className?: string;
    id: string;
}

export const NewsDetails = memo((props: NewsDetailsProps) => {
    const { className, id } = props;

    const news = useSelector((state: StateSchema) => 
        getNewsById(state, id)
    )

    if (!news) {
        return null;
    }

    return (
        <Card className={classNames(cls.NewsDetails, {}, [className])}>
            <Text title={news.title} text={news.subtitle} />
            <AppImage src={news.img} fallback={<Loader />} />
            {news.blocks.map((block) => renderNewsBlock(block))}
        </Card>
    );
});
