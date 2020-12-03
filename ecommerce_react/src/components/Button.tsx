import React from 'react';

interface IButton {
    text: string;
    cls: string;
    handleAction: () => void;

}

const Button: React.FC<IButton> = ({text, cls, handleAction}) => {
    const myAction = () => {
        handleAction();
    }
    return (
        <button onClick={myAction} className={cls}>{text}</button>
    );
}

export default Button;