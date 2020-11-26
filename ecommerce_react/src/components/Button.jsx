import React from 'react';

const Button = ({text, cls, handleAction}) => {
    const myAction = () => {
        handleAction();
    }
    return (
        <button onClick={myAction} className={cls}>{text}</button>
    );
}

export default Button;