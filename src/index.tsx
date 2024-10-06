import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { News } from "@/entities/News";
import { NewsBlockType } from "./entities/News/model/consts/newsConsts";
import { NEWS_LOCALSTORAGE_KEY } from "./shared/consts/localStorage";
import './app/styles/index.scss';

const container = document.getElementById("root");

if (!container) {
    throw new Error(
        "Контейнер root не найден. НЕ удалось вмонтировать реакт приложение"
    );
}

const initNews: News[] = [
    {
        id: "1",
        createdAt: "1.01.2024",
        img: "https://cdn.fishki.net/upload/post/2021/02/16/3613183/2e037d6c10de68fc5fe87943b902b62d.jpg",
        title: "Love is",
        subtitle:
            "Love is somtheing that I could write here, but i can not, because I am just checking how text can be posited here.",
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
            "Love is somtheing that I could write here, but i can not, because I am just checking how text can be posited here.",
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



localStorage.setItem(NEWS_LOCALSTORAGE_KEY, JSON.stringify(initNews));

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>
);
