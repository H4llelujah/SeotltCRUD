import { memo } from "react";
import {
    AdditionalClasses,
    classNames,
} from "@/shared/lib/classNames/classNames";
import cls from "./Textarea.module.scss";

export type TextareaBorder = "round" | "normal" | "partial";

interface TextareaProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Textarea = memo((props: TextareaProps) => {
    const { className, value, onChange } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <textarea
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Textarea, {}, [className])}
        />
    );
});
