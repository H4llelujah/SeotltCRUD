import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Counter } from '@/entities/Counter/ui/Counter';

interface MainPageProps {
    className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
    const { className } = props;
    return (
        <div className={classNames('', {}, [className])}>
            MAIN PAGE
            <Counter />
        </div>
    );
});
