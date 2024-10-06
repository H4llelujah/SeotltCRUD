import { NewsBlockType } from "../consts/newsConsts";

export interface NewsBlockBase {
    id: string;
    type: NewsBlockType;
}

export interface NewsImageBlock extends NewsBlockBase {
    type: NewsBlockType.IMAGE;
    src: string;
    title: string;
}

export interface NewsTextBlock extends NewsBlockBase {
    type: NewsBlockType.TEXT;
    title: string;
    paragraphs: string[];
}

export type NewsBlock = NewsTextBlock | NewsImageBlock;

export interface News {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    createdAt: string;
    blocks: NewsBlock[];
}
