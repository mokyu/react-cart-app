import React from 'react';
import './Button.scss';

type InputProps = {
    children: any
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

function Button(props: InputProps) {
    return (
        <button className="button" onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;