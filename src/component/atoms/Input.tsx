import React from 'react';
import './Input.scss';

type InputProps = {
    placeholder?: string
    type? : 'text' | 'number'
    value?: any,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

function Input(props: InputProps = {type: "text"}) {
    return (
        <input
            className="input"
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default Input;
