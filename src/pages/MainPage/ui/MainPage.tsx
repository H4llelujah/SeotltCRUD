import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import { News, NewsBlockType } from "@/entities/News";
import { NEWS_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { Button } from "@/shared/ui/Button/Button";

interface MainPageProps {
    className?: string;
}

const initNews: News[] = [
    {
        id: "1",
        createdAt: "1.01.2024",
        img: "https://cdn.fishki.net/upload/post/2021/02/16/3613183/2e037d6c10de68fc5fe87943b902b62d.jpg",
        title: "Love is",
        subtitle:
            "Love is something that I could write about here, but I can't, because I'm just checking how text can be posted here.",
        blocks: [
            {
                id: "1",
                type: NewsBlockType.TEXT,
                title: "Title of This block",
                paragraphs: [
                    "This is paragraph 1",
                    "this is paragraph 2",
                    "this is something else",
                ],
            },
            {
                id: "2",
                type: NewsBlockType.TEXT,
                title: "Title of This block",
                paragraphs: [
                    "This is paragraph 1",
                    "this is paragraph 2",
                    "this is something else",
                ],
            },
            {
                id: "3",
                type: NewsBlockType.IMAGE,
                title: "Title of This block",
                src: "https://masterpiecer-images.s3.yandex.net/b2d91936767a11eeb11ee6d39d9a42a4:upscaled",
            },
        ],
    },
    {
        id: "2",
        createdAt: "1.01.2024",
        img: "https://cdn.fishki.net/upload/post/2021/02/16/3613183/2e037d6c10de68fc5fe87943b902b62d.jpg",
        title: "Love is",
        subtitle:
            "Love is something that I could write about here, but I can't, because I'm just checking how text can be posted here.",
        blocks: [
            {
                id: "1",
                type: NewsBlockType.TEXT,
                title: "Title of This block",
                paragraphs: [
                    "This is paragraph 1",
                    "this is paragraph 2",
                    "this is something else",
                ],
            },
            {
                id: "2",
                type: NewsBlockType.TEXT,
                title: "Title of This block",
                paragraphs: [
                    "This is paragraph 1",
                    "this is paragraph 2",
                    "this is something else",
                ],
            },
            {
                id: "3",
                type: NewsBlockType.IMAGE,
                title: "Title of This block",
                src: "https://masterpiecer-images.s3.yandex.net/b2d91936767a11eeb11ee6d39d9a42a4:upscaled",
            },
            {
                id: "4",
                type: NewsBlockType.TEXT,
                title: "Title of This block",
                paragraphs: [
                    "This is paragraph 1",
                    "this is paragraph 2",
                    "this is something else",
                ],
            },
        ],
    },
];

export const MainPage = memo((props: MainPageProps) => {
    const { className } = props;

    const onMockNews = useCallback(() => {
        localStorage.setItem(NEWS_LOCALSTORAGE_KEY, JSON.stringify(initNews));
    }, []);

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            MAIN PAGE
            <Button onClick={onMockNews}>Получить mock новости</Button>
        </div>
    );
});
