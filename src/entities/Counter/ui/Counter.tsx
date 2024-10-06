import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string;
}

export const Counter = memo((props: CounterProps) => {
    const { className } = props;
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    }

    const decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div className={classNames('', {}, [className])}>
            {value}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
});
