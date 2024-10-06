import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsDetailsPage.module.scss";
import { NewsActions, NewsDetails } from "@/entities/News";
import { useParams } from "react-router-dom";
import { NewsDetailsPageHeader } from "../NewsDetailsPageHeader/NewsDetailsPageHeader";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface NewsDetailsPageProps {
    className?: string;
}

const NewsDetailsPage = (props: NewsDetailsPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { id } = useParams();

    if (!id) {
        return null;
    }

    useEffect(() => {
        if (id) {
            dispatch(NewsActions.newsInit(id))
        }
    }, [])

    return (
        <VStack
            gap="16"
            className={classNames(cls.NewsDetailsPage, {}, [className])}
        >
            <NewsDetailsPageHeader id={id} />
            <NewsDetails id={id} />
        </VStack>
    );
};

export default NewsDetailsPage;
