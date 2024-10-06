import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { News } from "@/entities/News";
import { NewsBlockType } from "./entities/News/model/consts/newsConsts";
import { NEWS_LOCALSTORAGE_KEY } from "./shared/consts/localStorage";
import "./app/styles/index.scss";

const container = document.getElementById("root");

if (!container) {
    throw new Error(
        "Контейнер root не найден. НЕ удалось вмонтировать реакт приложение"
    );
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>
);
