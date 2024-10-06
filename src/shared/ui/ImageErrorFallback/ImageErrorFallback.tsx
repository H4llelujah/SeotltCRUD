import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ImageErrorFallback.module.scss';

interface ImageErrorFallbackProps {
    className?: string;
}

export const ImageErrorFallback = memo((props: ImageErrorFallbackProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ImageErrorFallback, {}, [className])}>
            NO PHOTO
        </div>
    );
});
