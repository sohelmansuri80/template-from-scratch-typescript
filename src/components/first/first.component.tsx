import * as React from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks';

import { updateMessage } from '../../redux/first/firstSlice';

const First = () => {
    const message = useAppSelector((state) => state.first.message);
    const dispatch = useAppDispatch();

    const handleMessageChange = (event: { target: { value: string } }) => {
        dispatch(updateMessage(event.target.value));
    };

    return (
        <div className="first-container">
            <span>{message}</span>
            <br />
            <input type="text" value={message} onChange={handleMessageChange} />
        </div>
    );
};

export default First;
