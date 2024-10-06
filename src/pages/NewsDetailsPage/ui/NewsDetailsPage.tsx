import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NewsDetailsPage.module.scss";
import { NewsDetails } from "@/entities/News";
import { useParams } from "react-router-dom";

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
        <div className={classNames(cls.NewsDetailsPage, {}, [className])}>
            <NewsDetails id={id} />
        </div>
    );
};
