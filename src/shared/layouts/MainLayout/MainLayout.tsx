import { memo, ReactElement } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MainLayout.module.scss";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className, header, content } = props;
    return (
        <VStack
            gap="24"
            className={classNames(cls.MainLayout, {}, [className])}
        >
            <div className={cls.header}>{header}</div>
            <div className={cls.content}>{content}</div>
        </VStack>
    );
};
