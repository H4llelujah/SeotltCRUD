import { LinkProps, NavLink } from 'react-router-dom';
import { ForwardedRef, ReactNode, forwardRef } from 'react';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            to,
            className,
            children,
            ...otherProps
        } = props;

        return (
            <NavLink
                to={to}
                ref={ref}
                {...otherProps}
            >
                {children}
            </NavLink>
        );
    },
);
