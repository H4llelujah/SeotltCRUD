import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsDetailsPage.module.scss";
import { NewsDetails } from "@/entities/News";
import { useParams } from "react-router-dom";
import { NewsDetailsPageHeader } from "../NewsDetailsPageHeader/NewsDetailsPageHeader";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";

interface NewsDetailsPageProps {
    className?: string;
}

export const NewsDetailsPage = (props: NewsDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams();

    if (!id) {
        return null;
    }

    return (
        <VStack gap="16" className={classNames(cls.NewsDetailsPage, {}, [className])}>
            <NewsDetailsPageHeader id={id} />
            <NewsDetails id={id} />
        </VStack>
    );
};
