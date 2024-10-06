import { memo, useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { NewsEditing } from "@/widgets/NewsEditing";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNewsData, getNewsForm, NewsActions } from "@/entities/News";
import cls from "./NewsEditPage.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface NewsEditPageProps {
    className?: string;
}

const NewsEditPage = memo((props: NewsEditPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const isEdit = Boolean(id);
    const news = useSelector(getNewsForm);

    useEffect(() => {
        dispatch(NewsActions.setForm(isEdit));
    }, []);

    return (
        <div className={classNames(cls.NewsEditPage, {}, [className])}>
            <NewsEditing isEdit={isEdit} news={news} />
        </div>
    );
});

export default NewsEditPage;
