import React, {
    InputHTMLAttributes,
    MutableRefObject,
    memo,
    useRef,
    useState,
} from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = "text",
        ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const [isFocused, setIsFocused] = useState(false);

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.focused]: isFocused,
    };

    const input = (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    );

    return input;
});
