import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import {
    getRouteMain,
    getRouteNews,
    getRouteNewsCreate,
} from "@/shared/consts/router";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    return (
        <HStack gap="8" className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={getRouteMain()}>Главная</AppLink>
            <AppLink to={getRouteNews()}>Новости</AppLink>
            <AppLink to={getRouteNewsCreate()}>Добавить новость</AppLink>
        </HStack>
    );
});
