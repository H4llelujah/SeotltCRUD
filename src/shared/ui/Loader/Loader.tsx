import { classNames } from "@/shared/lib/classNames/classNames";
// import './Loader.scss';
import cls from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.loader, {}, [className])} />
);
