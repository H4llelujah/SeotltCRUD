import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NewsDeleteButton.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { getRouteNews } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { NewsActions } from '@/entities/News';
import { NewsPageActions } from '@/pages/NewsPage';

interface NewsDeleteButtonProps {
    className?: string;
    id: string;
}

export const NewsDeleteButton = memo((props: NewsDeleteButtonProps) => {
    const { className, id } = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onDeleteClick = useCallback(() => {
        dispatch(NewsPageActions.deleteById(id))
        navigate(getRouteNews());
    }, [id])

    return (
        <Button onClick={onDeleteClick} color='error'>Удалить</Button>
    );
});
